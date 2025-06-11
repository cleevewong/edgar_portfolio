import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I&apos;m <span className="text-primary">Your Name</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A passionate full-stack developer crafting beautiful and functional
            web experiences. I specialize in building modern web applications
            with cutting-edge technologies.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">View Projects</Button>
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
