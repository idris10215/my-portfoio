const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Mohammed Idris</p>
            </div>

            <div className="flex gap-4">
                <div className="social-icon">
                    <a href="https://github.com/idris10215"><img src="/assets/github.svg" alt="github" className="h-8" /></a>
                </div>
                <div className="social-icon">
                    <a href="https://linkedin.com/in/idris10215"><img src="/assets/linkedIn.svg" alt="linkedIn" className="h-8" /></a>
                </div>
            </div>


        </section>
    )
}
export default Footer;
