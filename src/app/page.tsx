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
            Hi, I'm <span className="font-semibold">Tyler Pham</span>
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
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <Card className="max-w-80">
                    <CardHeader>
                      <CardTitle>Studymonkey</CardTitle>
                      <CardDescription>Python</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        A studying tool that utilizes OpenAI API to generate
                        flashcards from .pdf documents.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <p className="text-blue-400 underline">
                        <a href="https://github.com/tylerp63/Studymonkey/tree/main">
                          Link
                        </a>
                      </p>
                    </CardFooter>
                  </Card>
                </CarouselItem>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
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
