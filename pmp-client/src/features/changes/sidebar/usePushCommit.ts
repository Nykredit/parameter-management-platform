import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { CommitBody } from "../types";
import useServices from "../../services/useServices";
import { Service } from "../../services/types";
import { useEffect, useState } from "react";

interface SingleServiceMutationVariables {
    commit: CommitBody,
    service: Service
}

const usePushCommitSingleService = () => {
  function later(delay: number) {
    return new Promise(function(resolve) {
      setTimeout(resolve, delay);
    });
  }
    return useMutation({
      mutationFn: async ({commit, service}: SingleServiceMutationVariables) => {
          //const res = await axios.post(service.address, commit);
          //return res.status === 200;
          await later(3000)
          console.log("Pushing", commit, "to", service);
          return true;
      }
    });
};

type RequestState = "loading" | "success" | "error" | "partial"

const usePushCommit = (commit: CommitBody) => {
  const [requestState, setRequestState] = useState<RequestState>("loading");
  const { data: services } = useServices();
    const { mutateAsync } = usePushCommitSingleService();

    useEffect(() => {
      const fun = async () => {
        if (!services) {
          return;
        }
        const promises = services?.map((service) => {
          return mutateAsync({service, commit});
        });

        const results = await Promise.allSettled(promises);
        if (results.every((res) => res.status === "fulfilled")) {
          setRequestState("success");
        } else if (results.every((res) => res.status === "rejected")) {
          setRequestState("error");
        } else {
          setRequestState("partial");
        }
      }
      // TODO: Is this evil?
      void fun();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
      requestState
    };
};

export default usePushCommit;
