"use client";

import { useMemo, useState } from "react";

const samples = {
  python: {
    label: "Python",
    code: `def greet(name):
    return f"Hello, {name}! Ready to code?"

print(greet("Easy Coder"))
print(2 + 2)`,
    output: "Hello, Easy Coder! Ready to code?\n4",
  },
  java: {
    label: "Java",
    code: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello from Easy Coder");
    System.out.println(18 + 7);
  }
}`,
    output: "Hello from Easy Coder\n25",
  },
  web: {
    label: "Web",
    code: `const title = "Easy Coder";
const skills = ["HTML", "CSS", "JavaScript"];
console.log(title + " · " + skills.join(" / "));`,
    output: "Easy Coder · HTML / CSS / JavaScript",
  },
} as const;

type Lang = keyof typeof samples;

export function Playground() {
  const [lang, setLang] = useState<Lang>("python");
  const [code, setCode] = useState<string>(samples.python.code);
  const [output, setOutput] = useState<string | null>(null);

  const active = useMemo(() => samples[lang], [lang]);

  function switchLang(next: Lang) {
    setLang(next);
    setCode(samples[next].code);
    setOutput(null);
  }

  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0B1224] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
      <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
        <div className="flex gap-2">
          {(Object.keys(samples) as Lang[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => switchLang(key)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                lang === key
                  ? "bg-white text-ink"
                  : "text-mist hover:bg-white/5 hover:text-white"
              }`}
            >
              {samples[key].label}
            </button>
          ))}
        </div>
        <div className="hidden items-center gap-1.5 sm:flex">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
      </div>
      <textarea
        value={code}
        onChange={(event) => setCode(event.target.value)}
        spellCheck={false}
        className="min-h-[260px] w-full resize-y bg-transparent px-5 py-4 font-mono text-sm leading-7 text-[#D7E3FF] outline-none"
        aria-label={`${active.label} code editor`}
      />
      <div className="flex items-center justify-between border-t border-white/8 px-4 py-3">
        <p className="text-xs text-mist">A taste of the in-app editor. Full runtimes live in the app.</p>
        <button
          type="button"
          onClick={() => setOutput(active.output)}
          className="rounded-full bg-cyan px-4 py-2 text-xs font-semibold text-ink hover:bg-white"
        >
          Run
        </button>
      </div>
      {output ? (
        <pre className="border-t border-white/8 bg-black/30 px-5 py-4 font-mono text-sm text-cyan">
          {output}
        </pre>
      ) : null}
    </div>
  );
}
