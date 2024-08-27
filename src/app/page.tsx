import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex mt-40">
        <div className="mx-auto">
          <div className="mx-auto">
            <Image
              src="/headshot.png"
              width={300}
              height={300}
              alt="Headshot"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <div id="about" className="min-w-screen flex">
        <div className="mx-auto mt-10">
          <h1 className="text-7xl">
            Hi, I&apos;m <span className="font-semibold">Tyler Pham</span>
          </h1>
        </div>
      </div>

      <div className="min-w-screen flex px-4 py-4 mt-4">
        <div className="mx-auto">
          <h1 className="text-3xl">
            I&apos;m an{" "}
            <span className="underline">aspiring software engineer</span> at{" "}
            <span className="font-semibold">Texas A&amp;M University.</span>
          </h1>
        </div>
      </div>

      <div className="flex mt-8">
        <div className="mx-auto">
          <div className="flex gap-4">
            <div className="flex gap-2">
              <a href="https://github.com/tylerp63">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Image
                        src="/github.svg"
                        width={35}
                        height={35}
                        alt="github"
                      />
                    </TooltipTrigger>
                    <TooltipContent>Github</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </a>
            </div>
            <div className="flex gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Image src="/mail.svg" width={35} height={35} alt="mail" />
                  </TooltipTrigger>
                  <TooltipContent>tylerphm1@gmail.com</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Image
                      src="/phone.svg"
                      width={35}
                      height={35}
                      alt="phone"
                    />
                  </TooltipTrigger>
                  <TooltipContent>469-401-2121</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>

      <div id="project" className="min-w-screen flex  px-4 py-4 mt-40"></div>
      <div className="flex h-48 mb-48">
        <div className="w-1/2 text-6xl font-semibold flex">
          <div className="mx-auto">Projects</div>
        </div>
        <div className="w-1/2 flex">
          <div className="mx-auto">
            <Carousel className="">
              <CarouselContent className="w-80">
                <CarouselItem>
                  <Card className="max-w-80">
                    <CardHeader>
                      <CardTitle>Dropit.io</CardTitle>
                      <CardDescription>
                        Next.js, Supabase, PostgreSQL
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Developed an ecommerce product discovery application
                        using React and Next.js, which generated relevant
                        products by scraping Amazon data with Puppeteer scripts,
                        successfully scaling to handle hundreds of users
                        concurrently
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="https://dropit-io-m3gr-b40ymkr8c-tylerp63s-projects.vercel.app/"
                        className="mr-4"
                      >
                        <svg
                          data-testid="geist-icon"
                          height="16"
                          stroke-linejoin="round"
                          viewBox="0 0 16 16"
                          width="16"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8 1L16 15H0L8 1Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </Link>
                      <Link href="https://github.com/tylerp63/dropit-io">
                        <svg
                          data-testid="geist-icon"
                          height="16"
                          stroke-linejoin="round"
                          viewBox="0 0 16 16"
                          width="16"
                        >
                          <g clip-path="url(#clip0_872_3147)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z"
                              fill="currentColor"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_872_3147">
                              <rect width="16" height="16" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </CardFooter>
                  </Card>
                </CarouselItem>

                <CarouselItem>
                  <Card className="max-w-80">
                    <CardHeader>
                      <CardTitle>QR Code Generator</CardTitle>
                      <CardDescription>
                        Next.js, Prisma, PostgreSQL
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Engineered a QR code generation application using
                        Next.js, enabling users to generate and manage dynamic
                        QR codes linked to URLs, resulting in a 30\% improvement
                        in real-time update speed and seamless retrieval for
                        hundreds of users
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="https://qr-code-iup00bth0-tylerp63s-projects.vercel.app/"
                        className="mr-4"
                      >
                        <svg
                          data-testid="geist-icon"
                          height="16"
                          stroke-linejoin="round"
                          viewBox="0 0 16 16"
                          width="16"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8 1L16 15H0L8 1Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </Link>
                      <Link href="https://github.com/tylerp63/qr-code-generator">
                        <svg
                          data-testid="geist-icon"
                          height="16"
                          stroke-linejoin="round"
                          viewBox="0 0 16 16"
                          width="16"
                        >
                          <g clip-path="url(#clip0_872_3147)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z"
                              fill="currentColor"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_872_3147">
                              <rect width="16" height="16" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </CardFooter>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="max-w-80">
                    <CardHeader>
                      <CardTitle>Studymonkey</CardTitle>
                      <CardDescription>Python</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Developed an interactive educational app using
                        Streamlit, integrating OpenAI’s GPT-3.5 API to convert
                        PDFs and text documents into dynamic chat sessions and
                        automatically generated flashcards, benefiting over
                        1,000 students with personalized study aids
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="https://studymonkey.streamlit.app/"
                        className="mr-4"
                      >
                        <svg
                          data-testid="geist-icon"
                          height="16"
                          stroke-linejoin="round"
                          viewBox="0 0 16 16"
                          width="16"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8 1L16 15H0L8 1Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </Link>
                      <Link href="https://github.com/tylerp63/Studymonkey">
                        <svg
                          data-testid="geist-icon"
                          height="16"
                          stroke-linejoin="round"
                          viewBox="0 0 16 16"
                          width="16"
                        >
                          <g clip-path="url(#clip0_872_3147)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z"
                              fill="currentColor"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_872_3147">
                              <rect width="16" height="16" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
