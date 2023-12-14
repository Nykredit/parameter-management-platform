import { ReactNode } from 'react';
import { Theme } from 'rmwc';

/** Adds a colored bar to the left of a component, fitting the current theme */
const ThemeMarkerWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div className='themeMarkerWrapper flex w-full'>
            <Theme use={['primaryBg', 'onPrimary']} wrap>
                <div
                    className='themeMarker flex-0'
                    style={{ width: '5px', height: 'auto', borderRadius: '5px', marginRight: '10px' }}
                ></div>
            </Theme>
            <div className='flex-1 overflow-auto'>{children}</div>
        </div>
    );
};

export default ThemeMarkerWrapper;
