"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Cloud, Thermometer, LineChart, Settings, ArrowUpRight } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { motion } from "framer-motion";

interface WeatherData {
  uvIndex: number;
  cloudCover: number;
  temperature: number;
}

interface EfficiencyData {
  efficiency: number;
  recommendation: string;
  timestamp: string;
}

const mockData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  efficiency: 65 + Math.random() * 20,
  predicted: 75 + Math.random() * 15,
}));

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <div className="flex items-center gap-2">
            <Sun className="h-6 w-6 text-yellow-500" />
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>
      </header>

      <main className="container px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 md:grid-cols-3"
        >
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-yellow-100 p-2 dark:bg-yellow-900">
                <Sun className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">UV Index</p>
                <h3 className="text-2xl font-bold">5.2</h3>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-900">
                <Cloud className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Cloud Cover</p>
                <h3 className="text-2xl font-bold">25%</h3>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-red-100 p-2 dark:bg-red-900">
                <Thermometer className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Temperature</p>
                <h3 className="text-2xl font-bold">24°C</h3>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="mt-6">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold">Efficiency Overview</h2>
                  <p className="text-sm text-muted-foreground">24-hour performance analysis</p>
                </div>
                <Button variant="outline" size="sm">
                  <LineChart className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
              </div>
              <div className="h-[400px] mt-8">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockData}>
                    <defs>
                      <linearGradient id="efficiency" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="predicted" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="time" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="efficiency"
                      stroke="hsl(var(--chart-1))"
                      fillOpacity={1}
                      fill="url(#efficiency)"
                    />
                    <Area
                      type="monotone"
                      dataKey="predicted"
                      stroke="hsl(var(--chart-2))"
                      fillOpacity={1}
                      fill="url(#predicted)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="mt-6 p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-green-100 p-2 dark:bg-green-900">
                <ArrowUpRight className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">AI Recommendations</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Current Efficiency: 78.5%
                </p>
                <p className="mt-2">Adjust panel tilt to 32° for optimal performance</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}