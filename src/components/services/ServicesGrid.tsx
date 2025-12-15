import { Avatar, ThreeDIcon } from "@/lib/image/image";
import { Service } from "@/lib/types";
import { Star } from "lucide-react";
import Image from "next/image";


function ServicesGrid({ service }: { service: Service }) {
  return (
    <section className="md:max-w-7xl mx-auto overflow-visible py-14 md:py-20">
      <div className="px-4 md:px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto md:max-w-3xl">
          <h2 className="mb-6 leading-tight">
            Your Ideas, Our Expertise, Impactful Results
          </h2>
          <p className="text-md text-gray-700 leading-relaxed">
            Comprehensive solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap- w-full ">
          {/* First column - Split in two with VISIBLE gap */}
          <div className="h-full grid grid-cols-1 md:grid-rows-2 gap-y-4">
            <div className="relative rounded-2xl overflow-hidden p-6 flex flex-col justify-between">
              {/* Background Image */}
              <Image
                src="/images/grid-2.webp"
                alt="Background"
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Avatars (Top) */}
              <div className="relative z-10">
                <div className="flex -space-x-3">
                  {[Avatar.avatar1, Avatar.avatar2, Avatar.avatar3].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-full w-14 h-14 flex items-center justify-center backdrop-blur-xl shadow-md overflow-hidden"
                    >
                      <Image
                        src={item}
                        alt="Avatar"
                        className="object-cover w-full translate-y-2 h-full rounded-full"
                        width={400}
                        height={400}
                      />
                    </div>
                  ))}

                  <div className="rounded-full w-14 h-14 backdrop-blur-xl flex items-center justify-center shadow-md">
                    <p className="text-lg text-white font-medium ">12+</p>
                  </div>
                </div>
              </div>

              {/* Text (Bottom) */}
              <div className="relative z-10 text-white">
                <p className="text-2xl font-medium">12+ Creative Minds</p>
                <small className="opacity-90">United minds working together</small>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-linear-to-l from-blue-50 via-blue-100 to-primary/40 flex flex-col justify-between">
              {/* Star Icon (Top) */}
              <div className="mb-6">
                <Image
                  src={ThreeDIcon.star}
                  alt="Rating Star"
                  className="w-18 h-16 rotate-30 rounded-2xl"
                  height={2000}
                  width={2000}
                />
              </div>

              {/* Text Content (Bottom) */}
              <div>
                <p className="text-2xl font-medium">
                  <span className="text-3xl font-medium">4.8/5</span> Customer Satisfaction
                </p>
                <small className="text-gray-700 ">We value your feedback</small>
              </div>
            </div>
          </div>

            {/* Second column - Simple centered content */}
            <div className="bg-secondary relative h-full rounded-2xl flex items-center justify-center min-h-[200px] md:min-h-[400px]">
              <Image
                src="/images/human-vr.webp"
                alt="Hero Image"
                className="object-cover w-full h-full rounded-2xl"
                height={2000}
                width={2000}
                priority
              />
              <div className="absolute left-0 bottom-0 p-4">

                <p className=" text-xl text-white font-medium">In this era of Artificial Intelligence</p>
                <small className="text-white">We are here to help your business succeed, and to make your vision a reality</small>
              </div>
            </div>


            <div className="md:col-span-2 space-y-4 md:space-y-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 ">
                <div className="md:w-1/2 h-48 md:h-60 bg-linear-to-l from-blue-50 via-blue-100 to-primary/40 rounded-2xl flex items-center justify-center relative">
                  <Image
                    src="/images/infinite.jpg"
                    alt="Hero Image"
                    className="object-cover w-full h-full rounded-2xl"
                    height={2000}
                    width={2000}
                    priority
                  />
                  {/* <div className="absolute inset-0 bg-black/10 rounded-2xl" /> */}

                  <div className="absolute left-0 bottom-0 p-4  ">
                    <p className="  text-base  font-medium  ">
                      We provide infinite possibilities with unlimited creativity
                    </p>

                  </div>
                </div>
                <div className="md:w-1/2 h-48 md:h-60 bg-linear-to-l from-blue-50 via-blue-100 to-primary/40 rounded-2xl flex items-center justify-center relative">
                  <Image
                    src="/images/cat2.jpg"
                    alt="Hero Image"
                    className="object-cover w-full h-full rounded-2xl"
                    height={2000}
                    width={2000}
                    priority
                  />
                  <div className="absolute inset-0 bg-black/15 rounded-2xl" />

                  <div className="absolute left-0 bottom-0 p-4">
                    <p className="text-base text-white  font-medium  ">
                      From start to finish, we stand with our clients, offering continuous support at every stage.
                    </p>

                  </div>
                </div>
              </div>

              {/* Full width bottom section */}
              <div className="bg-primary h-48 md:h-60 rounded-2xl flex items-center justify-center">

                <Image
                  src="/images/3dUI.jpg"
                  alt="Hero Image"
                  className="object-cover w-full h-full rounded-2xl"
                  height={2000}
                  width={2000}
                  priority
                />
                <div className="absolute left-0 bottom-0 p-4">
                  <p className="text-base text-white  font-medium  ">
                    From start to finish, we stand with our clients, offering continuous support at every stage.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default ServicesGrid;