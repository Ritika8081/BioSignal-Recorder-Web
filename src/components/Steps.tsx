/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Separator } from "./ui/separator";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import Image from "next/image";

const Steps = () => {
  const ImageLinks = [
    "https://docs.upsidedownlabs.tech/_images/connections-with-arduino.png",
    "https://docs.upsidedownlabs.tech/_images/connection-with-cable.png",
    "https://docs.upsidedownlabs.tech/_images/emg.png",
    "https://docs.upsidedownlabs.tech/_images/ecg.png",
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-4 min-h-[calc(100vh-8rem)] py-8 px-4">
      <div className="flex items-center justify-center text-sm sm:text-xl text-center whitespace-nowrap">
        <span className="flex flex-row gap-2">
          Click{" "}
          <Badge className="cursor-default">
            <p className="text-sm sm:text-base">&quot;Connect&quot;</p>
          </Badge>{" "}
          For Board Connection.
        </span>
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground text-center">
        For More Detailed Steps Please Refer{" "}
        <Link
          href={
            "https://docs.upsidedownlabs.tech/hardware/bioamp/bioamp-exg-pill/index.html"
          }
          className="underline underline-offset-2"
        >
          Official Documentation
        </Link>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-7xl"
      >
        <CarouselContent>
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/2 lg:basis-1/3 select-none"
            >
              <div className="p-1">
                <Card className="border-primary">
                  <CardContent className="flex aspect-square items-center justify-center p-2 sm:p-4 lg:p-6">
                    {index % 2 === 0 ? (
                      <div className="w-full h-full">
                        {index === 0 && (
                          <div className="flex justify-center items-center flex-col gap-4 text-xs sm:text-sm h-full">
                            <p className="text-center">
                              Connect your BioAmp EXG Pill to your MCU/ADC as
                              per the connection table shown below:
                            </p>
                            <div className="w-full max-w-[200px] sm:max-w-none">
                              <Table className="w-full">
                                <TableCaption>
                                  BioAmp to MCU/ADC connection.
                                </TableCaption>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead className="w-1/2">
                                      BioAmp
                                    </TableHead>
                                    <TableHead className="text-right">
                                      MCU/ADC
                                    </TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  <TableRow>
                                    <TableCell className="font-medium">
                                      VCC
                                    </TableCell>
                                    <TableCell className="text-right">
                                      5V
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell className="font-medium">
                                      GND
                                    </TableCell>
                                    <TableCell className="text-right">
                                      GND
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell className="font-medium">
                                      OUT
                                    </TableCell>
                                    <TableCell className="text-right">
                                      ADC Input
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </div>
                          </div>
                        )}
                        {index === 2 && (
                          <div className="flex flex-col h-full">
                            <span className="text-base sm:text-xl font-semibold">
                              Connecting electrode cable
                              <Separator className="bg-primary" />
                            </span>
                            <div className="flex justify-center items-center flex-grow">
                              <span className="text-xs sm:text-sm lg:text-base">
                                Connect the BioAmp cable to BioAmp EXG Pill by
                                inserting the cable end in the JST PH connector
                                as shown in the Image{" "}
                                <MoveRight className="w-min inline" />
                              </span>
                            </div>
                          </div>
                        )}
                        {index === 4 && (
                          <div className="flex flex-col h-full">
                            <span className="text-base sm:text-xl font-semibold mb-2">
                              Electrodes placement for EMG
                              <Separator className="bg-primary" />
                            </span>
                            <div className="flex justify-center items-center flex-grow">
                              <div className="w-full">
                                <ol className="list-decimal text-xs sm:text-sm space-y-1">
                                  <li>
                                    Connect the BioAmp cable to gel electrodes.
                                  </li>
                                  <li>
                                    Peel the plastic backing from electrodes.
                                  </li>
                                  <li>
                                    Place the IN+ and IN- cables on the arm near
                                    the ulnar nerve & REF (reference) at the
                                    back of your hand as shown in the connection
                                    diagram.
                                  </li>
                                </ol>
                              </div>
                            </div>
                          </div>
                        )}
                        {index === 6 && (
                          <div className="flex flex-col h-full">
                            <span className="text-base sm:text-xl font-semibold mb-2">
                              Electrodes placement for ECG
                              <Separator className="bg-primary" />
                            </span>
                            <div className="flex justify-center items-center flex-grow">
                              <div className="w-full">
                                <ol className="list-decimal text-xs sm:text-sm space-y-1">
                                  <li>
                                    Connect the BioAmp cable to gel electrodes.
                                  </li>
                                  <li>
                                    Peel the plastic backing from electrodes.
                                  </li>
                                  <li>
                                    Place the IN- cable on the left side, IN+ in
                                    the middle and REF (reference) on the far
                                    right side as shown in the diagram.
                                  </li>
                                </ol>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Image
                        alt={`Step ${index + 1}`}
                        width={500}
                        height={500}
                        src={ImageLinks[Math.floor(index / 2)]}
                        className="rounded-xl max-h-full max-w-full object-contain"
                      />
                    )}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-primary border-2 hidden sm:flex" />
        <CarouselNext className="border-primary border-2 hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default Steps;
