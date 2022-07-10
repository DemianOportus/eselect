
function Footer(){

    const date = new Date();
    let thisYear = date.getFullYear();

return(
<footer id="footer" style={{marginTop: "80px"}}>
    <div>
    <i className="footer-icon fa-brands fa-twitter"></i>
    <i className="footer-icon fa-brands fa-facebook-f"></i>
    <i className="footer-icon fa-brands fa-instagram"></i>
    <i className="footer-icon fa-solid fa-envelope"></i>
    <p>© {thisYear} Copyright e-selection</p>
    </div>
</footer>
);
}

export default Footer
