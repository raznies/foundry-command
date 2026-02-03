"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Shield, Zap, Terminal, BarChart3, Clock } from "lucide-react";

const agents = [
  { name: "Friday", role: "Orchestrator", status: "Active", color: "text-blue-400" },
  { name: "Vision", role: "Engineer", status: "Sprinting", color: "text-emerald-400" },
  { name: "Fury", role: "Researcher", status: "Hunting", color: "text-amber-400" },
  { name: "Quill", role: "Growth", status: "Drafting", color: "text-purple-400" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 font-sans selection:bg-white/20">
      <header className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
            <Shield className="text-black w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">FOUNDRY COMMAND</h1>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
          <Clock className="w-4 h-4 text-white/40" />
          <span className="text-sm font-medium">19:25 IST</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: "System Status", value: "Optimal", icon: Activity, color: "text-emerald-400" },
            { label: "Active Missions", value: "2", icon: Zap, color: "text-blue-400" },
            { label: "Total Output", value: "14 SHIPPED", icon: BarChart3, color: "text-purple-400" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl p-6 rounded-3xl"
            >
              <div className="flex justify-between items-start mb-4">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Live</span>
              </div>
              <p className="text-white/50 text-sm mb-1 font-medium">{stat.label}</p>
              <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
            </motion.div>
          ))}
        </section>

        <h2 className="text-xs uppercase tracking-[0.2em] text-white/30 font-bold mb-6 ml-2">Active Squad</h2>
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {agents.map((agent, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="group relative bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all p-6 rounded-[2rem] overflow-hidden"
            >
              <div className="flex flex-col gap-1">
                <p className="text-lg font-bold tracking-tight">{agent.name}</p>
                <p className="text-xs text-white/40 font-medium mb-4 italic">{agent.role}</p>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full animate-pulse ${agent.color.replace('text', 'bg')}`} />
                  <span className={`text-xs font-bold uppercase tracking-wider ${agent.color}`}>{agent.status}</span>
                </div>
              </div>
              <Terminal className="absolute -bottom-2 -right-2 w-12 h-12 text-white/[0.02] group-hover:text-white/[0.05] transition-colors" />
            </motion.div>
          ))}
        </section>

        <div className="grid grid-cols-1 gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-white/[0.03] border border-white/[0.08] p-8 rounded-[2.5rem]"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold tracking-tight">Active Project: SDR-as-a-Service</h2>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-blue-500/20">
                Phase 1: Architecture
              </span>
            </div>
            <div className="space-y-4">
              {[
                { task: "Finalize SDR Architecture", status: "Waiting for Review", progress: 90 },
                { task: "Dashboard UI Polish", status: "In Progress", progress: 65 },
                { task: "Appwrite Schema Mapping", status: "Complete", progress: 100 },
              ].map((task, i) => (
                <div key={i} className="bg-black/20 p-4 rounded-2xl border border-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium">{task.task}</p>
                    <span className="text-[10px] text-white/40">{task.progress}%</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-white/20" style={{ width: `${task.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
