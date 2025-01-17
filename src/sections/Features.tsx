import { FeatureCard } from "../components/FeatureCard";
import { Tag } from "../components/Tag";
import { features } from "../Constants/Constants";
import avatar1 from "../assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "../assets/images/avatar-lula-meyers.jpg";
import avatar3 from "../assets/images/avatar-florence-shaw.jpg";
import avatar4 from "../assets/images/avatar-owen-garcia.jpg";
import { Avatar } from "../components/Avatar";
import { Key } from "../components/Key";
import incredibleGif from "../assets/images/gif-incredible.mp4";

const Features = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 ">
          <FeatureCard
            title="Real-time Collaboration"
            description="Work together seamlessly with conflict-free team editing"
            className="col-span-1 md:col-span-2 lg:col-span-1 group"
          >
            <div className="flex aspect-video items-center justify-center">
              <Avatar className="border-blue-500 z-30">
                <img src={avatar1} alt="Avatar 1" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-4 border-indigo-500 z-20">
                <img src={avatar2} alt="Avatar 2" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-4 border-amber-500 z-10">
                <img src={avatar3} alt="Avatar 3" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-4 border-transparent group-hover:border-green-500 transition duration-200">
                <div className="size-full bg-neutral-700 relative rounded-full inline-flex items-center justify-center gap-1">
                  <img
                    src={avatar4}
                    alt="Avatar 4"
                    className="absolute inset-0 rounded-full opacity-0 transition duration-200 group-hover:opacity-100"
                  />
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      key={i}
                      className="size-1.5 rounded-full bg-white inline-flex"
                    ></span>
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Interactive Prototyping"
            description="Engage your clients with Prototypes that react to user actions"
            className="col-span-1 md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center">
              <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center">
                We've achieved{" "}
                <span
                  className="bg-gradient-to-r relative from-purple-400 to-pink-400
                 bg-clip-text text-transparent"
                >
                  <span>incredible</span>
                  <video
                    src={incredibleGif}
                    autoPlay
                    muted
                    playsInline
                    loop
                    className="absolute bottom-full left-1/2 -translate-x-1/2
                     rounded-2xl shadow-xl opacity-0 pointer-events-none trnsition duration-500 group-hover:opacity-100"
                  ></video>
                </span>{" "}
                growth this year
              </p>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Keyboard Quick Actions"
            description="Powerful commands to help you create designs more quickly"
            className="col-span-1  md:col-start-2  md:col-span-2 lg:col-span-1"
          >
            <div className="aspect-video flex justify-center items-center gap-4 group">
              <Key className="w-28 outline transition-all duration-200 outline-transparent outline-2 group-hover:outline-lime-400 outline-offset-2 group-hover:translate-y-1 ">
                Shift
              </Key>
              <Key className="outline transition-all duration-200 outline-transparent outline-2 group-hover:outline-lime-400 outline-offset-2 group-hover:translate-y-1 delay-150">
                Alt
              </Key>
              <Key className="outline transition-all duration-200 outline-transparent outline-2 group-hover:outline-lime-400 outline-offset-2 group-hover:translate-y-1 delay-300">
                C
              </Key>
            </div>
          </FeatureCard>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5  gap-3 items-center py-1.1 rounded-2xl md:py-2 hover:scale-105 duration-500 group"
            >
              <span
                className="bg-lime-400 text-neutral-950 size-5 
              rounded-full inline-flex items-center justify-center text-xl
               group-hover:rotate-90 transition duration-500"
              >
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
