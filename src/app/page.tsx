"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Shield, Zap, Terminal, BarChart3, Clock, LayoutGrid, Users } from "lucide-react";

const agents = [
  { name: "Friday", role: "Orchestrator", status: "Active", color: "text-blue-400" },
  { name: "Vision", role: "Engineer", status: "Architecting", color: "text-emerald-400" },
  { name: "Fury", role: "Researcher", status: "Hunting", color: "text-amber-400" },
  { name: "Quill", role: "Growth", status: "Drafting", color: "text-purple-400" },
];

export default function Dashboard() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit' });
      setTime(istTime);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-sans selection:bg-white/20">
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <header className="flex justify-between items-center mb-16">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <Shield className="text-black w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tighter">FOUNDRY COMMAND</h1>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Autonomous Intelligence</p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-5 py-2.5 bg-white/[0.03] rounded-2xl border border-white/10 backdrop-blur-md">
          <Clock className="w-4 h-4 text-white/40" />
          <span className="text-sm font-semibold tracking-tight">{time} IST</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        {/* System Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { label: "System Health", value: "Optimal", icon: Activity, color: "text-emerald-400" },
            { label: "Neural Load", value: "8.4%", icon: Zap, color: "text-blue-400" },
            { label: "Credits Burn", value: "$0.02 / HR", icon: BarChart3, color: "text-purple-400" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-colors p-8 rounded-[2.5rem] backdrop-blur-2xl"
            >
              <stat.icon className={`w-6 h-6 ${stat.color} mb-6`} />
              <p className="text-white/40 text-xs mb-1 font-bold uppercase tracking-widest">{stat.label}</p>
              <p className="text-3xl font-bold tracking-tighter">{stat.value}</p>
            </motion.div>
          ))}
        </section>

        {/* Squad Status */}
        <div className="flex items-center gap-2 mb-8 ml-2">
          <Users className="w-4 h-4 text-white/20" />
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Active Squad</h2>
        </div>
        
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {agents.map((agent, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 + 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10 transition-all p-8 rounded-[2.5rem] overflow-hidden backdrop-blur-md"
            >
              <div className="relative z-10">
                <p className="text-xl font-bold tracking-tighter mb-1">{agent.name}</p>
                <p className="text-xs text-white/30 font-medium mb-6 tracking-tight">{agent.role}</p>
                <div className="flex items-center gap-2.5">
                  <div className={`w-2 h-2 rounded-full animate-pulse ${agent.color.replace('text', 'bg')}`} />
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${agent.color}`}>{agent.status}</span>
                </div>
              </div>
              <Terminal className="absolute -bottom-4 -right-4 w-20 h-20 text-white/[0.01] group-hover:text-white/[0.03] transition-colors" />
            </motion.div>
          ))}
        </section>

        {/* Project View */}
        <div className="flex items-center gap-2 mb-8 ml-2">
          <LayoutGrid className="w-4 h-4 text-white/20" />
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Current Operation</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/[0.02] border border-white/[0.06] p-10 rounded-[3rem] backdrop-blur-3xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[9px] font-bold uppercase tracking-[0.2em] rounded-full border border-blue-500/20 mb-4 inline-block">
                Project Active
              </span>
              <h2 className="text-3xl font-bold tracking-tighter">SDR-as-a-Service</h2>
            </div>
            <div className="flex gap-4">
              <div className="text-right">
                <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mb-1">Target Niche</p>
                <p className="text-sm font-semibold tracking-tight">Legal & High-Ticket B2B</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {[
              { task: "Architecture Gate", status: "Awaiting Approval", progress: 95, color: "bg-blue-400" },
              { task: "Appwrite Database Schema", status: "Verified", progress: 100, color: "bg-emerald-400" },
              { task: "Lead Discovery Engine", status: "Initializing", progress: 15, color: "bg-white/40" },
            ].map((task, i) => (
              <div key={i} className="group bg-white/[0.01] hover:bg-white/[0.02] p-6 rounded-3xl border border-white/[0.03] transition-colors">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm font-bold tracking-tight mb-1">{task.task}</p>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">{task.status}</p>
                  </div>
                  <span className="text-xs font-mono text-white/40">{task.progress}%</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${task.progress}%` }}
                    transition={{ delay: 1.2 + (i * 0.1), duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`h-full ${task.color}`} 
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
