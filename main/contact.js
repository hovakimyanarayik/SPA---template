const contact = {
    render() {
        return `
            <h2 class="pageHeader">Contact.</h2>
            <p class="about">Do you want us to style your home? Fill out the form
                and fill me in with the details : We love meeting new people!
            </p>
            <form>
                <p>Name</p>
                <input type="text">
                <p>Email</p>
                <input type="email">
                <p>Message</p>
                <input type="text">
                <button>Send Message</button>
            </form>
        `
    }
}

export default contact;