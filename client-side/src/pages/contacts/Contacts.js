const Contacts = () => {
    return (
        <div className="mx-[6%] md:mx-[16%] my-8 md:my-16 flex flex-col md:flex-row md:justify-center gap-8">
            <div>
                <form className="flex flex-col gap-4" action="mailto:rko.jishan@gmail.com" method="post" enctype="multipart/form-data" name="EmailForm">
                    <div className="flex justify-between items-center gap-4">
                        <label className="text-xl font-medium" htmlFor="name">Name:</label>
                        <input className="border-2 rounded-md w-64" type="text" name="name" id="name" />
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <label className="text-xl font-medium" htmlFor="email">Email:</label>
                        <input className="border-2 rounded-md w-64" type="email" name="email" id="email" />
                    </div>
                    <div className="flex justify-between items-start gap-4">
                        <label className="text-xl font-medium" htmlFor="message">Message:</label>
                        <textarea className="border-2 rounded-md" name="message" id="message" cols="29" rows="5"></textarea>
                    </div>
                    <div className="flex gap-4">
                    <input className="btnAction cursor-pointer" type="submit" value="Submit" />
                    <input className="btnAction cursor-pointer" type="reset" value="Reset" />
                    </div>
                </form>
            </div>
            <iframe className="w-full md:h-[450px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118103.45687625333!2d91.81986775!3d22.32593435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e0!3m2!1sen!2sbd!4v1656531900693!5m2!1sen!2sbd" title="GoogleMap" width={400} height={300} style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default Contacts;

