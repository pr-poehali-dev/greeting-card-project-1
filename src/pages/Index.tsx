import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <Card className="bg-[#F5F5F5] border-none shadow-lg rounded-3xl p-12 max-w-md w-full animate-fade-in">
        <div className="text-center space-y-6 animate-scale-in">
          <h1 className="text-6xl font-light text-black tracking-tight">
            Привет
          </h1>
          <div className="h-px bg-black/10 w-24 mx-auto"></div>
          <p className="text-xl text-black/70 font-normal">
            Карта подошла
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Index;
