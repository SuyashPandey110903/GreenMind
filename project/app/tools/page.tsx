"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Sliders, Activity } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function SolarPanel() {
  return (
    <mesh rotation={[0.5, 0, 0]}>
      <boxGeometry args={[3, 0.1, 2]} />
      <meshStandardMaterial color="#10B981" />
    </mesh>
  );
}

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <h1 className="text-xl font-bold">Solar Optimization Tools</h1>
        </div>
      </header>

      <main className="container px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="rounded-lg bg-emerald-100 p-2 dark:bg-emerald-900">
                <Calculator className="h-6 w-6 text-emerald-500" />
              </div>
              <h2 className="text-xl font-semibold">Solar Calculator</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Calculate potential energy savings based on your panel configuration and location.
            </p>
            <Button className="w-full">Launch Calculator</Button>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="rounded-lg bg-emerald-100 p-2 dark:bg-emerald-900">
                <Sliders className="h-6 w-6 text-emerald-500" />
              </div>
              <h2 className="text-xl font-semibold">Panel Optimizer</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Interactive tool to optimize panel angle and orientation for maximum efficiency.
            </p>
            <Button className="w-full">Open Optimizer</Button>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="rounded-lg bg-emerald-100 p-2 dark:bg-emerald-900">
                <Activity className="h-6 w-6 text-emerald-500" />
              </div>
              <h2 className="text-xl font-semibold">System Monitor</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Monitor system health and check API connection status in real-time.
            </p>
            <Button className="w-full">View Status</Button>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">3D Panel Viewer</h2>
            <div className="h-[400px] bg-slate-100 dark:bg-slate-900 rounded-lg overflow-hidden">
              <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <SolarPanel />
                <OrbitControls />
              </Canvas>
            </div>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}