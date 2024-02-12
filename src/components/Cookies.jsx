
const Cookies = () => {
    return (
        <div>
            <input type="checkbox" id="showblock"/>
            <div class="slideout">
                <label class="slideout_tab" for="showblock" title="Help">
                <span class="tab_text">
                    <span>Cookie Info</span>
                </span>
                </label>
                <div class="slideout_content">
                <div class="push_right">
                    <p class="pst">Psst....<img class="cookie_img" src="https://lordicon.com/icons/wired/flat/2354-cookies.svg"/></p>
                    <p class="cookie">We use Cookies to offer you a better browsing experience, analyse site traffic and personalize content.
                    </p>
                    <p class="cookie">By continuing to browse TechByte Learning you will consent to our use of cookies.</p>
                </div>
                </div>
            </div>
        </div>
    )
};

export default Cookies;