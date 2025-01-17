import { IntegrationsColumn } from "../components/IntegrationsColumn";
import { Tag } from "../components/Tag";
import { integrations } from "../Constants/Constants";

const Integrations = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 place-items-center lg:gap-16">
          <div>
            <Tag>Integrations</Tag>
            <h2 className="text-6xl font-medium mt-6">
              Plays well with <span className="text-lime-400">others</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              Layers seamlessly connects and integrates with a variety of tools
              and services to help and collaborate
            </p>
          </div>

          <div>
            <div
              className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4
         [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
            >
              <IntegrationsColumn integrations={integrations} />
              <IntegrationsColumn
                reverse
                integrations={integrations.slice().reverse()}
                className="hidden md:flex"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
