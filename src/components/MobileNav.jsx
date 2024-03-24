import React from 'react'
import MobileSwitch from './MobileSwitch'
import { Link } from 'react-router-dom';

function MobileNav() {
    function CustomLink({ to, children, ...props }) {
        return (
            <li>
                <NavLink to={ to } activeClassName="active" { ...props }>
                    { children }
                </NavLink>
            </li>
        );
    }
    return (
        <nav id='mobile'>
            <ul>
                <CustomLink to="/About"><svg width="30px" height="30px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className="icon">
                    <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
                        <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -2159.000000)" >
                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                <path d="M134,2008.99998 C131.783496,2008.99998 129.980955,2007.20598 129.980955,2004.99998 C129.980955,2002.79398 131.783496,2000.99998 134,2000.99998 C136.216504,2000.99998 138.019045,2002.79398 138.019045,2004.99998 C138.019045,2007.20598 136.216504,2008.99998 134,2008.99998 M137.775893,2009.67298 C139.370449,2008.39598 140.299854,2006.33098 139.958235,2004.06998 C139.561354,2001.44698 137.368965,1999.34798 134.722423,1999.04198 C131.070116,1998.61898 127.971432,2001.44898 127.971432,2004.99998 C127.971432,2006.88998 128.851603,2008.57398 130.224107,2009.67298 C126.852128,2010.93398 124.390463,2013.89498 124.004634,2017.89098 C123.948368,2018.48198 124.411563,2018.99998 125.008391,2018.99998 C125.519814,2018.99998 125.955881,2018.61598 126.001095,2018.10898 C126.404004,2013.64598 129.837274,2010.99998 134,2010.99998 C138.162726,2010.99998 141.595996,2013.64598 141.998905,2018.10898 C142.044119,2018.61598 142.480186,2018.99998 142.991609,2018.99998 C143.588437,2018.99998 144.051632,2018.48198 143.995366,2017.89098 C143.609537,2013.89498 141.147872,2010.93398 137.775893,2009.67298" id="profile-[#1341]">

                                </path>
                            </g>
                        </g>
                    </g>
                </svg></CustomLink>
                <CustomLink to="/Projects" >
                    <svg fill="none" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="30px" height="30px" viewBox="0 0 94.504 94.504"
                        xml:space="preserve" className='icon'>
                        <g>
                            <g>
                                <path d="M93.918,45.833L69.799,21.714c-0.75-0.75-2.077-0.75-2.827,0l-5.229,5.229c-0.781,0.781-0.781,2.047,0,2.828
			l17.477,17.475L61.744,64.724c-0.781,0.781-0.781,2.047,0,2.828l5.229,5.229c0.375,0.375,0.884,0.587,1.414,0.587
			c0.529,0,1.039-0.212,1.414-0.587l24.117-24.118C94.699,47.881,94.699,46.614,93.918,45.833z"/>
                                <path d="M32.759,64.724L15.285,47.248l17.477-17.475c0.375-0.375,0.586-0.883,0.586-1.414c0-0.53-0.21-1.039-0.586-1.414
			l-5.229-5.229c-0.375-0.375-0.884-0.586-1.414-0.586c-0.53,0-1.039,0.211-1.414,0.586L0.585,45.833
			c-0.781,0.781-0.781,2.047,0,2.829L24.704,72.78c0.375,0.375,0.884,0.587,1.414,0.587c0.53,0,1.039-0.212,1.414-0.587l5.229-5.229
			C33.542,66.771,33.542,65.505,32.759,64.724z"/>
                                <path d="M60.967,13.6c-0.254-0.466-0.682-0.812-1.19-0.962l-4.239-1.251c-1.058-0.314-2.172,0.293-2.484,1.352L33.375,79.382
			c-0.15,0.509-0.092,1.056,0.161,1.521c0.253,0.467,0.682,0.812,1.19,0.963l4.239,1.251c0.189,0.056,0.38,0.083,0.567,0.083
			c0.863,0,1.66-0.564,1.917-1.435l19.679-66.644C61.278,14.612,61.221,14.065,60.967,13.6z"/>
                            </g>
                        </g>
                    </svg></CustomLink>
                <li className='switch'><MobileSwitch /></li>
                <CustomLink to="/Skills">
                    <svg height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 232.688 232.688" xml:space="preserve" className='icon'>
                        <g id="XMLID_350_">
                            <g id="XMLID_351_">
                                <path id="XMLID_352_" d="M97.688,61.344h120c8.284,0,15-6.716,15-15s-6.716-15-15-15h-120c-8.284,0-15,6.716-15,15
			S89.403,61.344,97.688,61.344z"/>
                            </g>
                            <g id="XMLID_439_">
                                <path id="XMLID_440_" d="M217.688,101.344h-120c-8.284,0-15,6.716-15,15s6.716,15,15,15h120c8.284,0,15-6.716,15-15
			S225.972,101.344,217.688,101.344z"/>
                            </g>
                            <g id="XMLID_441_">
                                <path id="XMLID_443_" d="M217.688,171.344h-120c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h120c8.284,0,15-6.716,15-15
			C232.688,178.06,225.972,171.344,217.688,171.344z"/>
                            </g>
                            <g id="XMLID_444_">
                                <path id="XMLID_445_" d="M48.785,104.408l-9.989-1.452l-4.467-9.052c-1.264-2.56-3.87-4.181-6.726-4.181
			c-2.854,0-5.462,1.621-6.726,4.181l-4.468,9.052l-9.988,1.452c-2.825,0.41-5.173,2.389-6.055,5.104
			c-0.882,2.715-0.146,5.695,1.897,7.688l7.228,7.045l-1.707,9.949c-0.483,2.814,0.674,5.658,2.983,7.336
			c1.307,0.95,2.853,1.433,4.409,1.433c1.193,0,2.392-0.285,3.489-0.861l8.936-4.698l8.936,4.698
			c1.098,0.577,2.296,0.861,3.489,0.861c0.007,0,0.015,0,0.021,0c4.142-0.001,7.499-3.358,7.499-7.5
			c0-0.629-0.077-1.241-0.223-1.825l-1.612-9.393l7.228-7.045c2.045-1.993,2.78-4.973,1.898-7.688
			C53.958,106.797,51.61,104.818,48.785,104.408z"/>
                            </g>
                            <g id="XMLID_446_">
                                <path id="XMLID_447_" d="M48.785,34.408l-9.989-1.452l-4.467-9.052c-1.264-2.56-3.87-4.181-6.726-4.181
			c-2.854,0-5.462,1.621-6.726,4.181l-4.468,9.052l-9.988,1.452c-2.825,0.41-5.173,2.389-6.055,5.104
			c-0.882,2.715-0.146,5.695,1.897,7.688l7.228,7.045l-1.707,9.949c-0.483,2.814,0.674,5.658,2.983,7.336
			c1.307,0.95,2.853,1.433,4.409,1.433c1.193,0,2.392-0.285,3.489-0.861l8.936-4.698l8.936,4.698
			c1.098,0.577,2.296,0.861,3.489,0.861c0.007,0,0.015,0,0.021,0c4.142,0,7.499-3.358,7.499-7.5c0-0.629-0.077-1.241-0.223-1.825
			l-1.612-9.393l7.228-7.045c2.045-1.993,2.78-4.973,1.898-7.688C53.958,36.797,51.61,34.818,48.785,34.408z"/>
                            </g>
                            <g id="XMLID_448_">
                                <path id="XMLID_449_" d="M48.785,174.408l-9.989-1.452l-4.467-9.052c-1.264-2.56-3.87-4.181-6.726-4.181
			c-2.854,0-5.462,1.621-6.726,4.181l-4.468,9.052l-9.988,1.452c-2.825,0.41-5.173,2.389-6.055,5.104
			c-0.882,2.715-0.146,5.695,1.897,7.688l7.228,7.045l-1.707,9.949c-0.483,2.814,0.674,5.658,2.983,7.336
			c1.307,0.95,2.853,1.433,4.409,1.433c1.193,0,2.392-0.285,3.489-0.861l8.936-4.698l8.936,4.698
			c1.098,0.577,2.296,0.861,3.489,0.861c0.007,0,0.015,0,0.021,0c4.142-0.001,7.499-3.358,7.499-7.5
			c0-0.629-0.077-1.241-0.223-1.825l-1.612-9.393l7.228-7.045c2.045-1.993,2.78-4.973,1.898-7.688
			C53.958,176.797,51.61,174.818,48.785,174.408z"/>
                            </g>
                        </g>
                    </svg></CustomLink>
                <CustomLink to="/Contact">
                    <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='icon'>
                        <path fill-rule="evenodd" d="M6 7a1.5 1.5 0 0 1-1.5 1.5A1.467 1.467 0 0 1 3.39 8H1a1 1 0 0 1 0-2h2.39a1.467 1.467 0 0 1 1.11-.5A1.5 1.5 0 0 1 6 7zm0 10a1.5 1.5 0 0 1-1.5 1.5 1.467 1.467 0 0 1-1.11-.5H1a1 1 0 0 1 0-2h2.39a1.467 1.467 0 0 1 1.11-.5A1.5 1.5 0 0 1 6 17z" />
                        <path fill-rule="evenodd" d="M19 2v20a2.006 2.006 0 0 1-2 2H3a2.006 2.006 0 0 1-2-2v-1a1 1 0 0 1 2 0v.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-19a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5V3a1 1 0 0 1-2 0V2a2.006 2.006 0 0 1 2-2h14a2.006 2.006 0 0 1 2 2z" />
                        <path fill-rule="evenodd" d="M6 12a1.5 1.5 0 0 1-1.5 1.5 1.467 1.467 0 0 1-1.11-.5H1a1 1 0 0 1 0-2h2.39a1.467 1.467 0 0 1 1.11-.5A1.5 1.5 0 0 1 6 12zm7.068 1.167a1.122 1.122 0 0 1-.563-.139.741.741 0 0 1-.341-.444 1.666 1.666 0 0 1-.576.444 1.6 1.6 0 0 1-.655.134 1.243 1.243 0 0 1-.505-.1 1.027 1.027 0 0 1-.36-.261 1.087 1.087 0 0 1-.217-.393 1.629 1.629 0 0 1-.071-.488 1.936 1.936 0 0 1 .067-.5 2.032 2.032 0 0 1 .2-.487 2.125 2.125 0 0 1 .8-.8 2.523 2.523 0 0 1 .614-.233 2.949 2.949 0 0 1 .745-.088 3.118 3.118 0 0 1 .613.052 2.8 2.8 0 0 1 .489.147l-.443 1.6a1.749 1.749 0 0 0-.071.451.6.6 0 0 0 .058.276.294.294 0 0 0 .157.14.635.635 0 0 0 .231.039.654.654 0 0 0 .36-.117 1.021 1.021 0 0 0 .3-.321 1.789 1.789 0 0 0 .205-.491 2.375 2.375 0 0 0 .077-.621A2.434 2.434 0 0 0 14 9.975a1.945 1.945 0 0 0-.523-.713 2.242 2.242 0 0 0-.8-.431 3.4 3.4 0 0 0-1.017-.145 2.912 2.912 0 0 0-1.125.214 2.8 2.8 0 0 0-.9.585 2.667 2.667 0 0 0-.595.876 2.75 2.75 0 0 0-.214 1.087 3.077 3.077 0 0 0 .235 1.244 2.512 2.512 0 0 0 .646.9 2.715 2.715 0 0 0 .966.541 3.838 3.838 0 0 0 1.2.181 5.662 5.662 0 0 0 .664-.036 4.77 4.77 0 0 0 .567-.1 3.987 3.987 0 0 0 .47-.142 2.942 2.942 0 0 0 .378-.17.282.282 0 0 1 .212-.039.2.2 0 0 1 .134.13l.157.383a4.6 4.6 0 0 1-1.12.479 5.3 5.3 0 0 1-1.457.181 4.71 4.71 0 0 1-1.545-.246 3.627 3.627 0 0 1-1.233-.705 3.225 3.225 0 0 1-.811-1.119A3.618 3.618 0 0 1 8 11.446a3.207 3.207 0 0 1 .127-.9 3.327 3.327 0 0 1 .362-.817 3.551 3.551 0 0 1 .567-.7 3.628 3.628 0 0 1 .738-.548A3.8 3.8 0 0 1 11.661 8a3.871 3.871 0 0 1 1.256.205 3.357 3.357 0 0 1 1.065.586 2.862 2.862 0 0 1 .74.932 2.73 2.73 0 0 1 .278 1.24 2.542 2.542 0 0 1-.145.865 2.168 2.168 0 0 1-.406.7 1.913 1.913 0 0 1-.613.468 1.739 1.739 0 0 1-.768.171zm-1.909-.691a.9.9 0 0 0 .242-.034.664.664 0 0 0 .232-.123.945.945 0 0 0 .2-.235 1.36 1.36 0 0 0 .151-.367l.341-1.217a1.757 1.757 0 0 0-.3-.026 1.247 1.247 0 0 0-.535.117 1.352 1.352 0 0 0-.43.315 1.52 1.52 0 0 0-.288.455 1.375 1.375 0 0 0-.106.533.654.654 0 0 0 .127.429.454.454 0 0 0 .366.153z" />
                    </svg></CustomLink>
            </ul>
        </nav>
    )
}

export default MobileNav