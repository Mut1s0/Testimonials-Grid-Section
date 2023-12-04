import Quote from "./images/bg-pattern-quotation.svg";
import Jeanette from "./images/image-jeanette.jpg";
import Jonathan from "./images/image-jonathan.jpg";
import Patrick from "./images/image-patrick.jpg";
import Daniel from "./images/image-daniel.jpg";
import Kira from "./images/image-kira.jpg";
import React from 'react'

function Testimonials() {
    return(
        
        <main className="flex flex-col justify-center items-center h-[3400px] min-[320px]:h-[3200px] min-[375px]:h-[3000px] min-[425px]:h-[2800px]">

            <div className="max-w-[85%] grid grid-cols-1 gap-10">

                <div className="content grid grid-cols-1 gap-10">

                    <section className="relative h-[750px] min-[320px]:h-[720px] min-[375px]:h-[680px] min-[425px]:h-[630px] sm:h-[600px] rounded-lg px-10">

                        <div className="w-[100%] flex justify-end">

                            <img src={Quote} alt="Quote" className="w-[150px]" />

                        </div>

                        <div className="absolute top-0 left-0 w-[100%] p-6 sm:p-10 flex flex-col gap-5">

                            <header className="flex justify-start items-center gap-5">

                                <img src={Daniel} alt="Daniel" className="rounded-full w-[40px]" />

                                <aside className="leading-6">

                                    <h3 className="text-[18px]">Daniel Clifford</h3>
                                    <h4 className="text-[13px]">Verified Graduate</h4>

                                </aside>

                            </header>

                            <div className="flex flex-col gap-4">

                                <h1 className="text-[20px] min-[320px]:text-[27px] leading-8">I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</h1>

                                <p className="leading-7 text-[14px] min-[375px]:text-[17px]">“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”</p>

                            </div>

                        </div>

                    </section>

                    <section className=" rounded-lg p-6 sm:p-10">

                        <div className="flex flex-col gap-5">

                            <header className="flex justify-start items-center gap-5">

                                <img src={Jonathan} alt="Jonathan" className="rounded-full w-[40px]" />

                                <aside className="leading-5">

                                    <h3 className="text-[18px]">Jonathan Walter</h3>
                                    <h4 className="text-[13px]">Verified Graduate</h4>

                                </aside>

                            </header>

                            <div className="flex flex-col gap-4">

                                <h1 className="text-[20px] min-[320px]:text-[27px] leading-8">The team was very supportive and kept me motivated</h1>

                                <p className="leading-7 text-[14px] min-[375px]:text-[17px]">“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”</p>

                            </div>

                        </div>

                    </section>

                    <section className=" rounded-lg p-6 sm:p-10">

                        <div className="flex flex-col gap-5">

                            <header className="flex justify-start items-center gap-5">

                                <img src={Jeanette} alt="Jeanette" className="rounded-full w-[40px]" />

                                <aside className="leading-5">

                                    <h3 className="text-[18px]">Jeanette Harmon</h3>
                                    <h4 className="text-[13px]">Verified Graduate</h4>

                                </aside>

                            </header>

                            <div className="flex flex-col gap-4">

                                <h1 className="text-[20px] min-[320px]:text-[27px] leading-8">An overall wonderful and rewarding experience</h1>

                                <p className="leading-7 text-[14px] min-[375px]:text-[17px]">“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”</p>

                            </div>

                        </div>

                    </section>

                    <section className=" rounded-lg p-6 sm:p-10">

                        <div className="flex flex-col gap-5">

                            <header className="flex justify-start items-center gap-5">

                                <img src={Patrick} alt="Patrick" className="rounded-full w-[40px]" />

                                <aside className="leading-5">

                                    <h3 className="text-[18px]">Patrick Abrams</h3>
                                    <h4 className="text-[13px]">Verified Graduate</h4>

                                </aside>

                            </header>

                            <div className="flex flex-col gap-4">

                                <h1 className="text-[20px] min-[320px]:text-[27px] leading-8">Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.</h1>

                                <p className="leading-7 text-[14px] min-[375px]:text-[17px]">“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”</p>

                            </div>

                        </div>

                    </section>
                    
                </div>

                <aside className="sideTestimony">

                    <section className=" rounded-lg p-6 sm:p-10">

                        <div className="flex flex-col gap-5">

                            <header className="flex justify-start items-center gap-5">

                                <img src={Kira} alt="Kira" className="rounded-full w-[40px]" />

                                <aside className="leading-5">

                                    <h3 className="text-[18px]">Kira Whittle</h3>
                                    <h4 className="text-[13px]">Verified Graduate</h4>

                                </aside>

                            </header>

                            <div className="flex flex-col gap-4">

                                <h1 className="text-[20px] min-[320px]:text-[27px] leading-8">Such a life-changing experience. Highly recommended!</h1>

                                <p className="leading-7 text-[14px] min-[375px]:text-[17px]">“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”</p>

                            </div>

                        </div>

                    </section>

                </aside>

            </div>

        </main>
    );
}

export default Testimonials
