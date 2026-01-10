import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { Header } from "./components/Header";
import { EcosystemMap } from "./components/EcosystemMap";
import { ManifestoSection } from "./components/ManifestoSection";
import { LegendPanel } from "./components/LegendPanel";
import { InteractionGuide } from "./components/InteractionGuide";
import { AccessibilityToggle } from "./components/AccessibilityToggle";

export default function App() {
  const [currentView, setCurrentView] = useState<"map" | "manifesto">("map");
  const [showIntro, _setShowIntro] = useState(true);

  const toggleView = () => {
    setCurrentView((prev) => (prev === "map" ? "manifesto" : "map"));
  };

  return (
    <div className="min-h-screen relative">
      <div style={{ padding: 24, background: "yellow", color: "black", fontSize: 24 }}>
        KAIRVO App montou ✅
      </div>

      <Header onToggleView={toggleView} currentView={currentView} />

      {!showIntro && currentView === "map" && <InteractionGuide />}

      <div className="size-full pt-20">
        <AnimatePresence mode="wait">
          {currentView === "map" ? (
            <motion.div
              key="map"
              className="size-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <EcosystemMap />
              <LegendPanel />
            </motion.div>
          ) : (
            <motion.div
              key="manifesto"
              className="size-full overflow-y-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ManifestoSection />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className="fixed bottom-6 right-8 text-white/30 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        {currentView === "map" && (
          <p>Passe o cursor sobre os nós para descobrir relações</p>
        )}
      </motion.div>

      {!showIntro && <AccessibilityToggle />}
    </div>
  );
}
