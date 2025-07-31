'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ContextMenuProps {
  onHueChange: (hue1: number, hue2: number) => void;
  onTriggerAnimation: () => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ onHueChange, onTriggerAnimation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [hue1, setHue1] = useState(120 + Math.floor(Math.random() * 240));
  const [hue2, setHue2] = useState(hue1 - 80 + Math.floor(Math.random() * 60) - 30);

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      if (!menuRef.current) return;

      const menuBox = menuRef.current.getBoundingClientRect();
      const bodyBox = { width: window.innerWidth, height: window.innerHeight };
      let targetX = event.clientX;
      let targetY = event.clientY;
      const padding = { x: 30, y: 20 };

      // Adjust position to prevent overflow
      if (targetX + menuBox.width >= bodyBox.width - padding.x) {
        targetX = bodyBox.width - menuBox.width - padding.x;
      }
      if (targetY + menuBox.height >= bodyBox.height - padding.y) {
        targetY = bodyBox.height - menuBox.height - padding.y;
      }

      setPosition({ x: targetX, y: targetY });
      setIsOpen(true);
    };

    const handlePointerDown = (event: MouseEvent) => {
      if (!menuRef.current || !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setTimeout(() => {
          setSelectedItem(null);
          setHue1(120 + Math.floor(Math.random() * 240));
          setHue2(hue1 - 80 + Math.floor(Math.random() * 60) - 30);
        }, 200);
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [hue1]);

  const handleHueChange = (type: 'hue1' | 'hue2', value: number) => {
    if (type === 'hue1') {
      setHue1(value);
      onHueChange(value, hue2);
    } else {
      setHue2(value);
      onHueChange(hue1, value);
    }
  };

  const menuItems = [
    { id: 'hue1', label: 'Adjust Gradient Hue 1', type: 'slider' },
    { id: 'hue2', label: 'Adjust Gradient Hue 2', type: 'slider' },
    { id: 'animate', label: 'Trigger Sidebar Shake', type: 'button' },
  ];

  return (
    <motion.div
      ref={menuRef}
      className={`fixed bg-[#111827]/95 backdrop-blur-md rounded-lg shadow-2xl border border-[#7C3AED]/20 z-50 ${isOpen ? 'block' : 'hidden'}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.8 }}
      transition={{ duration: 0.2 }}
    >
      <ul className="py-2">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`px-4 py-2 text-white hover:bg-[#7C3AED]/20 cursor-pointer ${selectedItem === item.id ? 'bg-[#7C3AED]/30' : ''}`}
            onClick={() => {
              setSelectedItem(item.id);
              if (item.id === 'animate') {
                onTriggerAnimation();
              }
            }}
          >
            {item.type === 'slider' ? (
              <div className="flex items-center gap-2">
                <span>{item.label}</span>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={item.id === 'hue1' ? hue1 : hue2}
                  onChange={(e) => handleHueChange(item.id as 'hue1' | 'hue2', parseInt(e.target.value))}
                  className="w-20 accent-[#00FFD1]"
                />
              </div>
            ) : (
              item.label
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ContextMenu;