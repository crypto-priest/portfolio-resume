import React from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
  level?: number;
}

export function CodeBlock({ children, level = 0 }: CodeBlockProps) {
  const indent = '\u00A0'.repeat(level * 4); // 4 spaces per level

  return (
    <div style={{
      fontFamily: 'Courier New, Consolas, Monaco, monospace',
      fontSize: '15px',
      lineHeight: '1.5',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word'
    }}>
      <span style={{ userSelect: 'none', opacity: 0 }}>{indent}</span>
      {children}
    </div>
  );
}

interface CodeLineProps {
  children: React.ReactNode;
  indent?: number;
}

export function CodeLine({ children, indent = 0 }: CodeLineProps) {
  const spaces = '\u00A0\u00A0\u00A0\u00A0'.repeat(indent); // 4 non-breaking spaces per indent level

  return (
    <div style={{
      fontFamily: 'Courier New, Consolas, Monaco, monospace',
      fontSize: '15px',
      lineHeight: '1.5',
      margin: 0,
      padding: 0
    }}>
      {indent > 0 && <span style={{ userSelect: 'none' }}>{spaces}</span>}
      {children}
    </div>
  );
}
