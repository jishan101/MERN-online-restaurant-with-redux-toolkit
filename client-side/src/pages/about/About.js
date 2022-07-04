const About = () => {
    return (
        <div className="mx-[6%] md:mx-[18%] my-8 md:my-16 flex flex-col md:flex-row gap-4 md:gap-24">
            <h1 className="font-righteous leading-tight font-medium text-7xl">About Me</h1>
            <div className="flex flex-col gap-4">
                <p>Hello, my name is Irfanul Islam Jishan. I&apos;ve recently graduated as a Computer Science and Engineering student. I&apos;ve worked as a freelance graphic designer on Fiverr for almost three and a half years.</p>
                <p>As a CSE student I was always good with programming and wanted to learn new programming languages. I was always intrigued by the website designs and how they interact with users. So, around the starting of 2021 I started researching about Web Development and decided to learn JavaScript.</p>
                <div>
                    <p>I&apos;ve been learning and working with these few frameworks since then,</p>
                    <ul className="frameworks sm:flex mt-2">
                        <div className="sm:mr-20 md:mr-6 lg:mr-20">
                            <li>HTML</li>
                            <li>CSS (Tailwind CSS, Bootstrap)</li>
                            <li>JavaScript</li>
                        </div>
                        <div>
                            <li>Node.js (Express)</li>
                            <li>React</li>
                            <li>Next.js</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;

