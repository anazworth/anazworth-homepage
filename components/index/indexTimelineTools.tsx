import {Accordion, AccordionButton, AccordionItem, AccordionPanel, Box} from "@chakra-ui/react";
import {BookOpenIcon, CodeIcon, DesktopComputerIcon, TerminalIcon, VideoCameraIcon} from "@heroicons/react/solid";

export function IndexTimelineTools() {
    return <div className="flex px-4 sm:justify-center">

        {/*@Tools*/}
        <div className="justify-center w-full">
            <Accordion allowMultiple className="text-center mx-auto">
                <AccordionItem>
                    <h2 className="text-2xl text-nord3 hover:text-nord4">
                        <AccordionButton>
                            <Box className="text-2xl sm:text-4xl">
                                Timeline
                            </Box>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        <ul>
                            <li className="flex flex-row"><strong className="text-nord8 pr-2">1996</strong> Born in
                                Starke, FL
                            </li>
                            <li className="flex flex-row"><strong className="text-nord8 pr-2">2014</strong> Graduated
                                from Bradford High School
                            </li>
                            <li className="flex flex-row"><strong className="text-nord8 pr-2">2014 -&gt; 2019</strong>United
                                States Marine Corps
                            </li>
                            <li className="flex flex-row"><strong className="text-nord8 pr-2">2020</strong>First year at
                                Valencia College
                            </li>
                            <li className="flex flex-row"><strong className="text-nord8 pr-2">2022</strong>Received A.S.
                                in Information Technology from Valencia
                            </li>
                            <li className="flex flex-row"><strong className="text-nord13 pr-2">Present</strong>Working
                                on B.A.S in Software Devleopment at Valencia
                            </li>
                        </ul>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2 className="text-2xl text-nord3 hover:text-nord4">
                        <AccordionButton>
                            <Box className="text-2xl sm:text-4xl">
                                Favorite Tools
                            </Box>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        <ul>
                            <li className="flex flex-row space-x-2">
                                <TerminalIcon className="w-5 h-5 text-nord15"/>
                                <a href="https://www.neovim.io">Neovim</a>
                            </li>

                            <li className="flex flex-row space-x-2">
                                <TerminalIcon className="w-5 h-5 text-nord15"/>
                                <a href="https://jetbrains.com">JetBrains</a>
                            </li>

                            <li className="flex flex-row space-x-2">
                                <TerminalIcon className="w-5 h-5 text-nord15"/>
                                <a href="https://github.com/tmux/tmux">tmux</a>
                            </li>

                            <li className="flex flex-row space-x-2">
                                <TerminalIcon className="w-5 h-5 text-nord15"/>
                                <a href="https://github.com/tldr-pages/tldr</div></div>">tldr</a>
                            </li>

                            <li className="flex flex-row space-x-2">
                                <DesktopComputerIcon className="w-5 h-5 text-nord13"/>
                                <a href="https://www.debian.org">Debian</a>
                            </li>

                            <li className="flex flex-row space-x-2">
                                <CodeIcon className="w-5 h-5 text-nord12"/>
                                <a href="https://github.com/features/copilot">GitHub Copilot</a>
                            </li>
                        </ul>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2 className="text-2xl">
                        <AccordionButton>
                            <Box className="text-nord3 text-2xl sm:text-4xl hover:text-nord4">
                                Recommended Resources
                            </Box>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        <ul>
                            <li className="flex flex-row space-x-2">
                                <VideoCameraIcon className="w-5 h-5 text-nord9"/>
                                <a href="https://cs50.harvard.edu/x/2022">CS50x</a>
                            </li>

                            <li className="flex flex-row space-x-2">
                                <VideoCameraIcon className="w-5 h-5 text-nord9"/>
                                <a href="https://missing.csail.mit.edu">MIT Missing Semester</a>
                            </li>

                            <li className="flex flex-row space-x-2">
                                <BookOpenIcon className="w-5 h-5 text-nord6"/>
                                <a href="https://pragprog.com">The Pragmatic Programmer</a>
                            </li>

                            <li className="flex flex-row space-x-2">
                                <BookOpenIcon className="w-5 h-5 text-nord6"/>
                                <a href="https://buildingasecondbrain.com">Building a Second Brain</a>
                            </li>

                            <li className="flex flex-row space-x-2">
                                <BookOpenIcon className="w-5 h-5 text-nord6"/>
                                <a href="https://alek772.github.io/Books/Practical%20Git%20Confident%20Git%20Through%20Practice.pdf">Practical
                                    Git</a>
                            </li>

                            <li className="flex flex-row space-x-2">
                                <BookOpenIcon className="w-5 h-5 text-nord6"/>
                                <a href="https://pragprog.com/titles/jwdsal2/a-common-sense-guide-to-data-structures-and-algorithms-second-edition/">Data
                                    Structures and Algorithms</a>
                            </li>

                        </ul>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>


    </div>;
}