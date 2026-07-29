import { useLayoutEffect, type RefObject } from "react";
import { translateText, useLanguage } from "./LanguageProvider";

const originalText = new WeakMap<Text, string>();

export function useStaticTextTranslation(ref: RefObject<HTMLElement | null>) {
  const { language } = useLanguage();

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes: Text[] = [];
    while (walker.nextNode()) nodes.push(walker.currentNode as Text);

    nodes.forEach((node) => {
      const parent = node.parentElement;
      if (!parent || ["STYLE", "SCRIPT"].includes(parent.tagName)) return;
      const source = originalText.get(node) ?? node.data;
      originalText.set(node, source);
      const trimmed = source.trim();
      if (!trimmed) return;
      const prefix = source.slice(0, source.indexOf(trimmed));
      const suffix = source.slice(source.indexOf(trimmed) + trimmed.length);
      node.data = `${prefix}${translateText(trimmed, language)}${suffix}`;
    });
  });
}
