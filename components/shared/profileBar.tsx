import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ProfileBarProps = {
  className?: string;
};

const ProfileBar = ({ className }: ProfileBarProps) => (
  <Card className={cn("w-full", className)}>
    <CardHeader>
      <CardTitle>Ucup</CardTitle>
      <CardDescription>Enter your email below to login to your account</CardDescription>
    </CardHeader>
    <CardContent>

    </CardContent>
    <CardFooter className="flex-col gap-2">
      <Button className="w-full py-6">Contact Me</Button>
    </CardFooter>
  </Card>
);

export default ProfileBar;
