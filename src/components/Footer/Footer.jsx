 import './Footer.css'
 import IMG from '../../img'

function Footer (){

    return (
        <div className='Footer'>
            <img  className ='footerLeft' src = {IMG.footerLeft} alt = ''/>

<div className="footer-content">
    <div className="top-footer">


   

<div className="oslo">
    <img className='footer-logo' src={IMG.logo2} alt="" />
    <ul  >
        <li>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
    <span> 1418 Riverwood Drive, Suite 3245 <br /> Cottonwood, CA 96052, United States </span>
</li>
<li>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
  <span> + 185659635 </span>
</li>
<li>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    <span> fashion098@gmail.com </span>
</li>
</ul>

</div>
<div className="shop-by">
    <h5>Shop By</h5>
    <ul className="shop">
    <li>New In </li>
    <li>Women </li>
    <li>Men </li>
    <li>Shoes</li>
    <li>Bags &amp; Accessories</li>
    <li>Top Brands </li>
</ul>
</div>
<div className="shop-by">
    <h5>Information</h5>
    <ul className="shop">
    <li>Home </li>
    <li>Shop </li>
    <li>About Us </li>
    <li>Blog</li>
    <li>Contact</li>
</ul>
</div>
<div className="shop-by">
    <h5>Get Help</h5>
    <ul className="shop">
    <li>Your Orders </li>
    <li>Your Account </li>
    <li>Track Order</li>
    <li>Your Wishlist</li>
    <li>Search </li>
    <li>Faqs</li>
</ul>
</div>



<div className="follow">
    <h5 >Follow Us</h5>
    <ul className="icons">
      <li>
         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.164 17.4976V10.6676H13.4682L13.8107 7.99347H11.164V6.29014C11.164 5.51847 11.379 4.99014 12.4865 4.99014H13.8899V2.60597C13.2071 2.5328 12.5207 2.49747 11.834 2.50014C9.79736 2.50014 8.39903 3.74347 8.39903 6.02597V7.98847H6.10986V10.6626H8.40403V17.4976H11.164Z" fill="white"/>
         </svg>
      </li>      
      <li>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.221 0.888496C7.1985 0.843496 7.51016 0.833496 10.0002 0.833496C12.4902 0.833496 12.8018 0.844329 13.7785 0.888496C14.7552 0.932663 15.4218 1.0885 16.0052 1.31433C16.616 1.54516 17.1702 1.906 17.6285 2.37266C18.0952 2.83016 18.4552 3.3835 18.6852 3.99516C18.9118 4.5785 19.0668 5.24516 19.1118 6.22016C19.1568 7.19933 19.1668 7.511 19.1668 10.0002C19.1668 12.4902 19.156 12.8018 19.1118 13.7793C19.0677 14.7543 18.9118 15.421 18.6852 16.0043C18.4552 16.6161 18.0946 17.1703 17.6285 17.6285C17.1702 18.0952 16.616 18.4552 16.0052 18.6852C15.4218 18.9118 14.7552 19.0668 13.7802 19.1118C12.8018 19.1568 12.4902 19.1668 10.0002 19.1668C7.51016 19.1668 7.1985 19.156 6.221 19.1118C5.246 19.0677 4.57933 18.9118 3.996 18.6852C3.38426 18.4551 2.83001 18.0945 2.37183 17.6285C1.90548 17.1707 1.54459 16.6167 1.31433 16.0052C1.0885 15.4218 0.933496 14.7552 0.888496 13.7802C0.843496 12.801 0.833496 12.4893 0.833496 10.0002C0.833496 7.51016 0.844329 7.1985 0.888496 6.22183C0.932663 5.24516 1.0885 4.5785 1.31433 3.99516C1.54493 3.38356 1.90609 2.82959 2.37266 2.37183C2.8302 1.90558 3.38389 1.5447 3.99516 1.31433C4.5785 1.0885 5.24516 0.933496 6.22016 0.888496H6.221ZM13.7043 2.5385C12.7377 2.49433 12.4477 2.48516 10.0002 2.48516C7.55266 2.48516 7.26266 2.49433 6.296 2.5385C5.40183 2.57933 4.91683 2.7285 4.5935 2.85433C4.166 3.021 3.86016 3.2185 3.53933 3.53933C3.2352 3.83521 3.00115 4.1954 2.85433 4.5935C2.7285 4.91683 2.57933 5.40183 2.5385 6.296C2.49433 7.26266 2.48516 7.55266 2.48516 10.0002C2.48516 12.4477 2.49433 12.7377 2.5385 13.7043C2.57933 14.5985 2.7285 15.0835 2.85433 15.4068C3.001 15.8043 3.23516 16.1652 3.53933 16.461C3.83516 16.7652 4.196 16.9993 4.5935 17.146C4.91683 17.2718 5.40183 17.421 6.296 17.4618C7.26266 17.506 7.55183 17.5152 10.0002 17.5152C12.4485 17.5152 12.7377 17.506 13.7043 17.4618C14.5985 17.421 15.0835 17.2718 15.4068 17.146C15.8343 16.9793 16.1402 16.7818 16.461 16.461C16.7652 16.1652 16.9993 15.8043 17.146 15.4068C17.2718 15.0835 17.421 14.5985 17.4618 13.7043C17.506 12.7377 17.5152 12.4477 17.5152 10.0002C17.5152 7.55266 17.506 7.26266 17.4618 6.296C17.421 5.40183 17.2718 4.91683 17.146 4.5935C16.9793 4.166 16.7818 3.86016 16.461 3.53933C16.1651 3.23522 15.8049 3.00117 15.4068 2.85433C15.0835 2.7285 14.5985 2.57933 13.7043 2.5385ZM8.82933 12.826C9.48321 13.0982 10.2113 13.1349 10.8893 12.9299C11.5672 12.7249 12.153 12.2909 12.5465 11.702C12.94 11.1131 13.1169 10.4059 13.0469 9.70108C12.9769 8.99628 12.6643 8.33764 12.1627 7.83766C11.8429 7.51806 11.4562 7.27334 11.0304 7.12112C10.6047 6.9689 10.1505 6.91296 9.70057 6.95734C9.25063 7.00172 8.81612 7.14531 8.42833 7.37777C8.04054 7.61023 7.70912 7.92578 7.45791 8.3017C7.20671 8.67763 7.04199 9.10457 6.97559 9.5518C6.9092 9.99902 6.94279 10.4554 7.07395 10.8881C7.2051 11.3208 7.43056 11.719 7.7341 12.0541C8.03763 12.3892 8.41168 12.6528 8.82933 12.826ZM6.6685 6.6685C7.10602 6.23097 7.62543 5.88391 8.19708 5.64713C8.76873 5.41035 9.38141 5.28847 10.0002 5.28847C10.6189 5.28847 11.2316 5.41035 11.8032 5.64713C12.3749 5.88391 12.8943 6.23097 13.3318 6.6685C13.7693 7.10602 14.1164 7.62543 14.3532 8.19708C14.59 8.76873 14.7119 9.38141 14.7119 10.0002C14.7119 10.6189 14.59 11.2316 14.3532 11.8032C14.1164 12.3749 13.7693 12.8943 13.3318 13.3318C12.4482 14.2154 11.2498 14.7119 10.0002 14.7119C8.75054 14.7119 7.55211 14.2154 6.6685 13.3318C5.78488 12.4482 5.28847 11.2498 5.28847 10.0002C5.28847 8.75054 5.78488 7.55211 6.6685 6.6685ZM15.7568 5.99016C15.8652 5.88789 15.952 5.7649 16.0121 5.62847C16.0721 5.49205 16.1042 5.34497 16.1063 5.19594C16.1085 5.04691 16.0808 4.89895 16.0247 4.76084C15.9687 4.62272 15.8855 4.49725 15.7801 4.39186C15.6747 4.28647 15.5493 4.20329 15.4112 4.14726C15.273 4.09123 15.1251 4.06348 14.9761 4.06565C14.827 4.06782 14.6799 4.09987 14.5435 4.15991C14.4071 4.21994 14.2841 4.30674 14.1818 4.41516C13.9829 4.62602 13.874 4.9061 13.8782 5.19594C13.8825 5.48578 13.9995 5.76256 14.2045 5.96753C14.4094 6.1725 14.6862 6.28952 14.9761 6.29374C15.2659 6.29797 15.546 6.18907 15.7568 5.99016Z" fill="white"/>
          </svg>
      </li>
      <li>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M18.125 4.9668C17.5274 5.22462 16.877 5.41016 16.207 5.48243C16.9026 5.06922 17.4234 4.41641 17.6719 3.64649C17.0192 4.03475 16.3042 4.30701 15.5586 4.45118C15.247 4.11803 14.8701 3.85262 14.4514 3.67151C14.0327 3.49039 13.5812 3.39744 13.125 3.39845C11.2793 3.39845 9.79493 4.89454 9.79493 6.73048C9.79493 6.98829 9.82618 7.2461 9.87696 7.49415C7.11329 7.34962 4.64844 6.0293 3.00977 4.00782C2.71118 4.51781 2.55471 5.0985 2.55664 5.68946C2.55664 6.84571 3.14453 7.86524 4.04102 8.46485C3.51271 8.44405 2.99676 8.29883 2.53516 8.04102V8.08204C2.53516 9.70118 3.67969 11.043 5.20508 11.3516C4.91867 11.426 4.62404 11.464 4.32813 11.4649C4.11133 11.4649 3.90625 11.4434 3.69922 11.4141C4.1211 12.7344 5.34961 13.6934 6.81251 13.7246C5.66797 14.6211 4.23438 15.1484 2.67774 15.1484C2.39844 15.1484 2.14063 15.1387 1.87305 15.1074C3.34961 16.0547 5.10157 16.6016 6.98829 16.6016C13.1133 16.6016 16.4649 11.5274 16.4649 7.12305C16.4649 6.97852 16.4649 6.83399 16.4551 6.68946C17.1035 6.21485 17.6719 5.62696 18.125 4.9668Z" fill="white"/>
          </svg>
      </li>
      <li>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M7.07484 15.9923C7.09484 15.7123 7.13484 15.4332 7.19484 15.1582C7.24734 14.9123 7.4065 14.2165 7.63984 13.2082L7.64567 13.1832L7.96817 11.7932C8.034 11.5098 8.08484 11.2898 8.119 11.2165C7.95718 10.8424 7.87652 10.4382 7.88234 10.0307C7.88234 8.9165 8.51234 8.05317 9.329 8.05317C9.629 8.04817 9.91567 8.17817 10.114 8.40817C10.3123 8.63734 10.404 8.94484 10.3657 9.23817C10.3657 9.61567 10.2948 9.90317 9.98817 10.934C9.929 11.1323 9.88817 11.2707 9.84984 11.4098C9.80734 11.5665 9.77067 11.7082 9.73984 11.8448C9.65984 12.1665 9.73317 12.509 9.93734 12.7665C10.0364 12.8924 10.1643 12.9926 10.3102 13.0587C10.4561 13.1248 10.6157 13.1549 10.7757 13.1465C12.019 13.1465 12.9423 11.4923 12.9423 9.3565C12.9423 7.71484 11.8673 6.62817 10.0823 6.62817C9.6355 6.61156 9.19007 6.68786 8.77424 6.85224C8.3584 7.01663 7.9812 7.26552 7.6665 7.58317C7.34506 7.90779 7.09145 8.29315 6.92048 8.71679C6.74951 9.14043 6.66459 9.59387 6.67067 10.0507C6.64995 10.543 6.80076 11.0272 7.09734 11.4207C7.24817 11.5373 7.30567 11.7398 7.24317 11.9123C7.209 12.0523 7.1265 12.3723 7.0965 12.479C7.08781 12.5314 7.06701 12.5811 7.03576 12.624C7.00452 12.667 6.96368 12.7021 6.9165 12.7265C6.87088 12.7503 6.82024 12.7629 6.76879 12.7632C6.71734 12.7634 6.66656 12.7515 6.62067 12.7282C5.654 12.329 5.124 11.2465 5.124 9.8615C5.124 7.374 7.19984 5.20817 10.284 5.20817C12.8965 5.20817 14.8515 7.149 14.8515 9.4915C14.8515 12.4348 13.2415 14.5782 10.9432 14.5782C10.6163 14.5877 10.2917 14.5203 9.99557 14.3815C9.69944 14.2427 9.44002 14.0363 9.23817 13.779L9.20234 13.9265L9.02984 14.6365L9.02817 14.6423C8.9065 15.1423 8.8215 15.4898 8.78817 15.6207C8.69984 15.9165 8.58817 16.2065 8.45484 16.4873C10.1131 16.8821 11.8595 16.6267 13.3353 15.7736C14.811 14.9205 15.9039 13.5345 16.3893 11.9005C16.8748 10.2665 16.7159 8.50864 15.9453 6.98818C15.1748 5.46772 13.8511 4.30018 12.2463 3.72552C10.6415 3.15085 8.87752 3.21273 7.31695 3.89843C5.75637 4.58413 4.51773 5.84155 3.8556 7.41227C3.19346 8.98299 3.15813 10.7477 3.75688 12.3436C4.35562 13.9396 5.54295 15.2456 7.07484 15.9932V15.9923ZM9.99984 18.3332C5.39734 18.3332 1.6665 14.6023 1.6665 9.99984C1.6665 5.39734 5.39734 1.6665 9.99984 1.6665C14.6023 1.6665 18.3332 5.39734 18.3332 9.99984C18.3332 14.6023 14.6023 18.3332 9.99984 18.3332Z" fill="white"/>
          </svg>
      </li>       
    </ul>
       <div >
        <h4>Newsletter Sign Up</h4>
        <p>Receive our latest updates about <br /> our products &amp;  promotions.</p>
      </div>
      <button>Your email addres</button>
      <button className='right'>Submit</button>
</div>
</div>



<div className="card">

<ul>
    <li><img src={IMG.f1} alt="" /></li>
    <li><img src={IMG.f2} alt="" /></li>
    <li><img src={IMG.f3} alt="" /></li>
    <li><img src={IMG.f4} alt="" /></li>
</ul>
<p >© 2022, OSLO Template. Made with heart by Pixelstrap</p>
</div>

</div>
<img  className ='footerRight' src = {IMG.footerRight} alt =''/>
</div>



    )
}

 export default Footer