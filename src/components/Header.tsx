import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="py-20 bg-secondary text-white animate-fade-in">
      <div className="container mx-auto text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Eudes-Hermann EKOUANDJA"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary"
        />
        <h1 className="text-4xl font-bold mb-4">Eudes-Hermann EKOUANDJA</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Développeur passionné et expert en systèmes & réseaux
        </p>
      </div>
    </header>
  );
};