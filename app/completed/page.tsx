import { Link } from "@nextui-org/link";

import { Logo } from "@/components/icons";

export default function CompletedPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Logo />
      <div className="">
        <p className="text-center text-2xl font-bold">
          Confirmation and <br />
          tracking information will <br /> be sent to your email!
        </p>
        <div className="flex-col whitespace-pre text-center text-xl font-normal">
          <p>
            Are you a seller too? <br />
            Check us out{" "}
            <Link className="text-xl" href="/sellers">
              here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
