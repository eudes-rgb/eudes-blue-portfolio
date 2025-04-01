
import { Moon, Sun, Laptop, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTheme } from "@/context/ThemeContext";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-sm border-2 border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 relative"
        >
          <Palette className="h-5 w-5 absolute opacity-0 scale-0 transition-all" />
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
          <span className="sr-only">Changer de thème</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-black/70 dark:bg-slate-800/90 backdrop-blur-md border border-blue-500/30 shadow-lg shadow-blue-500/20"
      >
        <div className="px-2 py-1.5 text-xs font-semibold text-gray-300 border-b border-blue-500/20 mb-1">
          Choisir un thème
        </div>
        <DropdownMenuItem 
          onClick={() => setTheme("light")} 
          className="hover:bg-blue-500/20 cursor-pointer text-gray-200 transition-colors"
        >
          <Sun className="mr-2.5 h-4 w-4 text-yellow-500" />
          <span>Clair</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")} 
          className="hover:bg-blue-500/20 cursor-pointer text-gray-200 transition-colors"
        >
          <Moon className="mr-2.5 h-4 w-4 text-blue-400" />
          <span>Sombre</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")} 
          className="hover:bg-blue-500/20 cursor-pointer text-gray-200 transition-colors"
        >
          <Laptop className="mr-2.5 h-4 w-4 text-gray-300" />
          <span>Système</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
