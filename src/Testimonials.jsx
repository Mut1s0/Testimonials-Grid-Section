// import Quote from "./images/bg-pattern-quotation.svg";
import Jeanette from "./images/image-jeanette.jpg";
import Jonathan from "./images/image-jonathan.jpg";
import Patrick from "./images/image-patrick.jpg";
import Daniel from "./images/image-daniel.jpg";
import Kira from "./images/image-kira.jpg";
import React from 'react'

function Testimonials() {

    return(

        <main className="min-h-screen flex items-center justify-center py-[100px]">

            <div className="max-w-[90%] lg:w-[1400px] grid md:grid-cols-3 xl:grid-cols-4 gap-10">

                <section className="md:col-span-2">
                    <div className="daniel min-h-full rounded-[10px] p-10">
                        <header className="flex items-center justify-start gap-8 mb-4">
                            <img src={Daniel} alt="Daniel" className="rounded-full w-[50px]" />
                            <div className="leading-snug">
                                <span className="daniel-title text-[20px]">Daniel Clifford</span>
                                <p className="daniel-subTitle text-[15px]">Verified Graduate</p>
                            </div>
                        </header>
                        <article className="flex flex-col gap-6">
                            <span className="daniel-header text-[25px]">I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</span>
                            <p className="daniel-content">“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”</p>
                        </article>
                    </div>
                </section>

                <section className="md:col-span-1">
                    <div className="jonathan min-h-full rounded-[10px] p-10">
                        <header className="flex items-center justify-start gap-8 mb-4">
                            <img src={Jonathan} alt="Jonathan" className="rounded-full w-[50px]" />
                            <div className="leading-snug">
                                <span className="jonathan-title text-[20px]">Jonathan Walters</span>
                                <p className="jonathan-subTitle text-[15px]">Verified Graduate</p>
                            </div>
                        </header>
                        <article className="flex flex-col gap-6">
                            <span className="jonathan-header text-[25px]">The team was very supportive and kept me motivated</span>
                            <p className="jonathan-content">“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”</p>
                        </article>
                    </div>
                </section>

                <section className="">
                    <div className="jeanette min-h-full rounded-[10px] p-10">
                        <header className="flex items-center justify-start gap-8 mb-4">
                            <img src={Jeanette} alt="Jeanette" className="rounded-full w-[50px]" />
                            <div className="leading-snug">
                                <span className="jeanette-title text-[20px]">Jeanette Harmon</span>
                                <p className="jeanette-subTitle text-[15px]">Verified Graduate</p>
                            </div>
                        </header>
                        <article className="flex flex-col gap-6">
                            <span className="jeanette-header text-[25px]">An overall wonderful and rewarding experience</span>
                            <p className="jeanette-content">“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”</p>
                        </article>
                    </div>
                </section>

                <section className="md:col-span-2">
                    <div className="patrick min-h-full rounded-[10px] p-10">
                        <header className="flex items-center justify-start gap-8 mb-4">
                            <img src={Patrick} alt="Patrick" className="rounded-full w-[50px]" />
                            <div className="leading-snug">
                                <span className="patrick-title text-[20px]">Patrick Abrams</span>
                                <p className="patrick-subTitle text-[15px]">Verified Graduate</p>
                            </div>
                        </header>
                        <article className="flex flex-col gap-6">
                            <span className="patrick-header text-[25px]">Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.</span>
                            <p className="patrick-content">“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”</p>
                        </article>
                    </div>
                </section>

                <aside className="md:col-start-1 md:col-end-4 xl:col-start-4 xl:col-end-5 xl:row-start-1 xl:row-end-3">
                    <div className="kira min-h-full rounded-[10px] p-10">
                        <header className="flex items-center justify-start gap-8 mb-4">
                            <img src={Kira} alt="Kira" className="rounded-full w-[50px]" />
                            <div className="leading-snug">
                                <span className="kira-title text-[20px]">Kira Whittle</span>
                                <p className="kira-subTitle text-[15px]">Verified Graduate</p>
                            </div>
                        </header>
                        <article className="flex flex-col gap-6">
                            <span className="kira-header text-[25px]">Such a life-changing experience. Highly recommended!</span>
                            <p className="kira-content">“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”</p>
                        </article>
                    </div>
                </aside>

            </div>

        </main>

    );
}

export default Testimonials;