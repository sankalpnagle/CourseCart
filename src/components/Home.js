import React from 'react'
import img1 from '../images/img6.jpg'
import vector from '../images/Vector.svg'
import sbg from '../images/search.png'
import dropbox from '../images/Dropbox_logo_2017.png'
import google from '../images/google.png'
import paypal from '../images/paypal.png'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import vector from '../images/Vector.svg'


export default function Home() {
    return (
        <>

            <div className='d-flex'>
                <div className='home-container'>
                    <div className='d-flex  gap-1 ps-5 py-2'>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <span > <FontAwesomeIcon className='py-2 star' icon={faStar} /></span>
                        <span > <FontAwesomeIcon className='py-2 star bg-none' icon={faStar} /></span>
                        <span className='mx-2 my-1'>Trused by over 4,332 students</span>

                    </div>
                    <h1 className='box1'>Learn Design with Nia Matos</h1>
                    <div style={{ margin: "-1rem 6rem" }}>
                        <svg style={{ width: "17rem", marginLeft: "5rem" }} xmlns="http://www.w3.org/2000/svg" width="380" height="12" viewBox="0 0 380 12" fill="none">
                            <path d="M379.109 1.91466C379.455 2.11227 379.711 2.35288 379.857 2.61754C380.003 2.88219 380.034 3.16363 379.949 3.43962C379.858 4.18087 379.34 4.534 378.023 4.5601C375.011 4.62034 371.999 4.64757 368.986 4.64181C357.861 4.62618 346.743 4.89429 335.623 5.28393C325.782 5.62892 315.94 5.95964 306.095 6.23424C290.459 6.67032 274.822 7.05943 259.185 7.46182C253.395 7.61 247.603 7.73373 241.818 7.87975C241.121 7.8959 240.432 7.98654 239.791 8.14668L325.042 8.79389C325.604 9.05987 325.96 9.43592 326.037 9.84729C326.114 10.2587 325.908 10.6752 325.459 11.0141C322.136 11.2065 318.8 11.2914 315.469 11.2683C306.441 11.2487 297.414 11.1883 288.383 11.1627C280.739 11.1421 273.094 11.1553 265.451 11.1419C252.597 11.1183 239.744 11.0865 226.891 11.0465C219.711 11.0201 212.534 10.9569 205.357 10.8938C198.531 10.8282 191.71 10.6747 184.882 10.6663C170.058 10.6473 155.233 10.6665 140.407 10.7238C129.871 10.765 119.317 10.9057 108.773 10.9767C103.214 11.0137 97.6534 10.9957 92.0951 11.0021C91.7475 11.0128 91.3996 11.0097 91.0542 10.9926C90.59 10.9595 90.1709 10.8296 89.8819 10.6292C89.593 10.4288 89.456 10.173 89.4988 9.91386C89.6114 9.4496 89.775 8.98881 89.9887 8.53406C92.718 8.22039 95.4809 8.02073 98.2535 7.93681C106.467 7.54966 114.683 7.19176 122.902 6.86305C129.736 6.59353 136.57 6.32606 143.406 6.178C154.759 5.9355 166.115 5.76955 177.468 5.59955C191.837 5.38455 206.206 5.21246 220.575 4.99235C232.155 4.81342 243.737 4.59156 255.313 4.38413C255.704 4.35601 256.091 4.31361 256.473 4.25724C255.291 3.93112 253.944 3.8193 252.62 3.93724C243.697 4.02366 234.775 4.11209 225.854 4.20256C214.619 4.31251 203.384 4.4228 192.15 4.5334C179.873 4.65947 167.595 4.79442 155.317 4.93821C145.472 5.04637 135.625 5.2189 125.783 5.26982C113.967 5.33022 102.153 5.32113 90.3409 5.28955C80.2661 5.26375 70.1935 5.19604 60.1232 5.08641C48.6709 4.95728 37.2273 4.71461 25.7734 4.59471C18.3778 4.51985 10.9595 4.58333 3.55079 4.58534C3.31983 4.59027 3.08717 4.60239 2.85606 4.60018C1.57699 4.60401 1.06176 4.45472 0.938513 4.04992C0.815262 3.64513 1.31721 3.34644 2.51452 3.23611C3.77444 3.11149 5.04364 3.0237 6.31677 2.97313C9.55859 2.86713 12.8039 2.75391 16.0456 2.72654C25.8906 2.64186 35.7358 2.56024 45.5769 2.54815C54.2645 2.53822 62.9457 2.65915 71.6427 2.6572C85.3048 2.65437 98.9683 2.63518 112.632 2.55164C123.519 2.48557 134.408 2.31528 145.295 2.18895C158.841 2.03101 172.386 1.87276 185.931 1.71416C200.99 1.54364 216.053 1.3577 231.108 1.22505C245.823 1.09525 260.537 0.997813 275.251 0.932702C286.602 0.87612 297.952 0.826681 309.3 0.847748C321.458 0.868881 333.615 0.918639 345.764 1.06453C356.059 1.18876 366.343 1.46333 376.629 1.68782C377.465 1.73423 378.293 1.81001 379.109 1.91466ZM260.976 4.24583L260.964 4.14395L259.924 4.16617L259.927 4.29173L260.976 4.24583Z" fill="#EF9E48" />
                        </svg>
                    </div>

                    <p className='box2'>Get your blood tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.</p>
                    <div className='box-input'>
                        <input className='' type="text" placeholder='Search Course Name' />
                        <img src={sbg} className='ms-2' />
                    </div>
                    <div className='box3'>
                        <span>Sponsored by:</span>
                        <img src={paypal} className='ms-2' />
                        <img src={google} className='ms-2' />
                        <img src={dropbox} className='ms-2' />
                    </div>
                </div>
                <div className='d-flex' style={{ marginLeft: "-7rem", marginTop: "6rem" }} >
                    <div className='d-flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                            <path d="M5.55191 2.81486V4.307H3.59932V6.5452H2.29759V4.307H0.345001V2.81486H2.29759V0.57666H3.59932V2.81486H5.55191Z" fill="#82C6C6" />
                        </svg>

                    </div>
                    <div  >
                        <img src={img1} className='img1' />
                    </div>
                    <div className='container-box'>
                        {/* <h1>hellow</h1> */}
                    </div>
                </div>

            </div>

        </>
    )
}
