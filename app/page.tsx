"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* Scene 1 */}
      <section className="h-screen flex flex-col items-center justify-center">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-500"
        >
          Connecting to Gang Archives...
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-gray-500 mt-3"
        >
          Searching Records...
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="text-green-400 mt-3"
        >
          Birthday Girl Anjali Detected ✅
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 6 }}
          className="text-7xl font-bold mt-8"
        >
          Access Granted
        </motion.h1>

      </section>

      {/* Scene 2 */}
      {/* Scene 2 */}
<section className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black">

  <motion.video
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.5 }}
    viewport={{ once: true }}
    autoPlay
    muted
    loop
    playsInline
    className="h-[80vh] w-auto rounded-xl shadow-2xl"
  >
    <source src="/videos/birthday.mp4" type="video/mp4" />
  </motion.video>

  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      viewport={{ once: true }}
      className="tracking-[0.5em] text-sm mb-4"
    >
      30 MAY 2026
    </motion.p>

    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      viewport={{ once: true }}
      className="text-6xl font-bold mb-2"
    >
      THE COUSIN GAZETTE
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 2.5 }}
      viewport={{ once: true }}
      className="text-lg tracking-widest mb-8"
    >
      SPECIAL BIRTHDAY EDITION
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.5, duration: 1 }}
      viewport={{ once: true }}
      className="text-7xl font-black text-center max-w-5xl"
    >
      MOST ICONIC PERSON
      <br />
      IN THE GANG
    </motion.h1>

    <motion.h1
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 5 }}
      viewport={{ once: true }}
      className="text-8xl font-black text-center text-red-400 mt-4"
    >
      OFFICIALLY TURNS 16
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 6.5 }}
      viewport={{ once: true }}
      className="mt-10 italic text-neutral-400"
    >
      The investigation begins...
    </motion.p>

  </div>

</section>

      {/* Scene 3 */}
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-6xl">Evidence Room</h1>
      </section>

      {/* Scene 4 */}
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-6xl">Letter From Rishu</h1>
      </section>

      {/* Scene 5 */}
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-6xl">Letter From Ishu</h1>
      </section>

      {/* Scene 6 */}
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-6xl">16 Reasons</h1>
      </section>

      {/* Scene 7 */}
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-6xl">Final Verdict</h1>
      </section>

    </main>
  );
}