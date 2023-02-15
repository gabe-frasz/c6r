import { Heading, ModalRootProps, Text } from "@c6r/react";
import { Meta, StoryObj } from "@storybook/react";
import { ModalDemo } from "../demos/ModalDemo";

export default {
  title: "Data display/Modal",
  component: ModalDemo,
  parameters: {
    docs: {
      page: CustomDocs,
    },
  },
} as Meta<ModalRootProps>;

export const Default: StoryObj<ModalRootProps> = {};

// FIXME: Modal docs

function CustomDocs() {
  return (
    <div className="prose">
      <Heading>Modal</Heading>

      <Text asChild>
        <p>
          Since I don&apos;t know how to use Storybook, here is the anatomy of
          Modal.
        </p>
      </Text>

      <code lang="js" className="text-white">
        <div>
          import {"{"} Modal {"}"} from &quot;@c6r/react&quot;;
        </div>
        <div>
          import {"{"} useState {"}"} from &quot;react&quot;;
        </div>
        <br />
        <div>export const ModalDemo = () =&gt; {"{"}</div>
        <div>const [open, setOpen] = useState(false);</div>
        <br />
        <div>return (</div>
        <div>
          &lt;Modal.Root open={"{"}open{"}"} onOpenChange={"{"}setOpen{"}"}
          &gt;
        </div>
        <div>&lt;Modal.Trigger&gt;Open Modal&lt;/Modal.Trigger&gt;</div>
        <br />
        <div>
          &lt;Modal.Content open={"{"}open{"}"}&gt;
        </div>
        <div>&lt;Modal.Title&gt;Modal&lt;/Modal.Title&gt;</div>
        <br />
        <div>&lt;Modal.Description&gt;</div>
        <div>
          A window overlaid on either the primary window or another dialog
        </div>
        <div>window, rendering the content underneath inert.</div>
        <div>&lt;/Modal.Description&gt;</div>
        <div>&lt;/Modal.Content&gt;</div>
        <div>&lt;/Modal.Root&gt;</div>
        <div>);</div>
        <div>{"}"};</div>
      </code>
    </div>
  );
}
