import './foot.scss';
import Im2 from '../img/Framesg.svg'
import { useMediaQuery } from 'react-responsive'

const Foot = () => {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1241px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1240px)' })

    return (
        <div>
            {isBigScreen && <div className='container'>
                <div className='div_spec'>
                    <img className='img1' src={Im2}></img>
                    <div className='login'>Login</div>
                    <div className='Get__get'><a href='#' className='Get__txt'>Get API Keys</a></div>
                </div>
                <div style={{ borderTop: "2px solid #275668 " }}></div>
                <div>
                    <div className='div'>
                        <div className='div_foot1 div_ftex'>
                            <div className='div_txt'><div className='div_nt'>Product</div></div>
                            <div className='div_txt'>Emission Calculations</div>
                            <div className='div_txt'>Diverse Offset Portfolio</div>
                            <div className='div_txt'>Matching the Offset</div>
                            <div className='div_txt'>Transparent Reporting</div>
                            <div className='div_txt'>Flexible API Integration</div>
                            <div className='div_txt'>Verified Carbon Offsets</div>
                        </div>

                        <div className='div_foot2 div_ft'>
                            <div className='div_txt'><div className='div_nt'>Use Cases</div></div>
                            <div className='div_txt'>Ecommerce</div>
                            <div className='div_txt'>Rideshare</div>
                            <div className='div_txt'>Flights</div>
                            <div className='div_txt'>Enterprise Resource Planning</div>
                            <div className='div_txt'>Energy</div>
                            <div className='div_txt'>Supply Chain</div>
                            <div className='div_txt'>Fintech</div>
                            <div className='div_txt'>Fleet</div>
                        </div>

                        <div className='div_foot3 div_ft'>
                            <div className='div_txt'><div className='div_nt'>Developers</div></div>
                            <div className='div_txt'>API Docs</div>
                            <div className='div_txt'>Ask Cloverly</div>
                        </div>

                        <div className='div_foot4 div_ft'>
                            <div className='div_txt'><div className='div_nt'>About</div></div>
                            <div className='div_txt'>How It Works</div>
                            <div className='div_txt'>Offset Projects</div>
                            <div className='div_txt'>Partners</div>
                            <div className='div_txt'>About Us</div>
                            <div className='div_txt'>Blog</div>
                            <div className='div_txt'>News & Press</div>
                            <div className='div_txt'>Contact</div>
                        </div>
                        <div className='div_foot3 div_ftt'>
                            <div className='div_txt'>FAQ</div>
                            <div className='div_txt'>Careers</div>
                            <div className='div_txt'>Terms of Service</div>
                            <div className='div_txt'>Privacy Policy</div>
                        </div>
                    </div>
                </div>
                <div className='div_specc'>
                    <div style={{ borderTop: "2px solid #275668 " }}></div>
                    <div className='div_cloverly'>© 2020 Cloverly</div>
                </div>
            </div>}


            {isTabletOrMobile && <div className='container'>
                <div className='div_spec'>
                    <img className='img1' src={Im2}></img>
                </div>
                <div style={{ borderTop: "2px solid #275668 " }}></div>
                <div>
                    <div className='div'>
                        <div className='div_foot1 div_ftex'>
                            <div className='div_txt'><div className='div_nt'>Product</div></div>
                            <div className='div_txt'>Emission Calculations</div>
                            <div className='div_txt'>Diverse Offset Portfolio</div>
                            <div className='div_txt'>Matching the Offset</div>
                            <div className='div_txt'>Transparent Reporting</div>
                            <div className='div_txt'>Flexible API Integration</div>
                            <div className='div_txt'>Verified Carbon Offsets</div>
                        </div>

                        <div className='div_foot2 div_ft'>
                            <div className='div_txt'><div className='div_nt'>Use Cases</div></div>
                            <div className='div_txt'>Ecommerce</div>
                            <div className='div_txt'>Rideshare</div>
                            <div className='div_txt'>Flights</div>
                            <div className='div_txt'>Enterprise Resource Planning</div>
                            <div className='div_txt'>Energy</div>
                            <div className='div_txt'>Supply Chain</div>
                            <div className='div_txt'>Fintech</div>
                            <div className='div_txt'>Fleet</div>
                        </div>

                        <div className='div_foot3 div_ft'>
                            <div className='div_txt'><div className='div_nt'>Developers</div></div>
                            <div className='div_txt'>API Docs</div>
                            <div className='div_txt'>Ask Cloverly</div>
                        </div>

                        <div className='div_foot4 div_ft'>
                            <div className='div_txt'><div className='div_nt'>About</div></div>
                            <div className='div_txt'>How It Works</div>
                            <div className='div_txt'>Offset Projects</div>
                            <div className='div_txt'>Partners</div>
                            <div className='div_txt'>About Us</div>
                            <div className='div_txt'>Blog</div>
                            <div className='div_txt'>News & Press</div>
                            <div className='div_txt'>Contact</div>
                        </div>
                        <div className='div_foot3 div_ftt'>
                            <div className='div_txt'>FAQ</div>
                            <div className='div_txt'>Careers</div>
                            <div className='div_txt'>Terms of Service</div>
                            <div className='div_txt'>Privacy Policy</div>
                        </div>
                    </div>
                </div>
                <div className='div_specc'>
                    <div style={{ borderTop: "2px solid #275668 " }}></div>
                    <div className='div_cloverly'>© 2020 Cloverly</div>
                </div>
            </div>}

        </div>

    )
}
export default Foot;