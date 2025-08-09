import React, { useState, useEffect, useContext } from "react";
import LanguageContext from "../../contexts/LanguageContext";
import "./LanguageNotification.scss";

const LanguageNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isSpanish } = useContext(LanguageContext);

  // Function to play notification sound
  const playNotificationSound = () => {
    try {
      // Create a subtle notification sound using Web Audio API
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // Create a gentle two-tone notification sound
      const playTone = (frequency, startTime, duration) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(frequency, startTime);
        oscillator.type = 'sine';
        
        // Gentle fade in/out
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.1, startTime + 0.01);
        gainNode.gain.linearRampToValueAtTime(0.1, startTime + duration - 0.01);
        gainNode.gain.linearRampToValueAtTime(0, startTime + duration);
        
        oscillator.start(startTime);
        oscillator.stop(startTime + duration);
      };
      
      const currentTime = audioContext.currentTime;
      playTone(800, currentTime, 0.15); // First gentle tone
      playTone(1000, currentTime + 0.1, 0.15); // Second slightly higher tone
      
    } catch (error) {
      // Fallback: no sound if Web Audio API is not supported
      console.log('Audio notification not available');
    }
  };

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Check if user has seen the notification before
    // const hasSeenNotification = false;
    // const hasSeenNotification = localStorage.getItem('hasSeenLanguageNotification');
    const hasSeenNotification = false; // Always show notification
    
    if (!hasSeenNotification) {
      // Show notification after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
        // Play notification sound
        playNotificationSound();
      }, 2000);

      // Auto-hide after 8 seconds (more time for mobile message)
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        // Don't save to localStorage so it shows every time
        // localStorage.setItem('hasSeenLanguageNotification', 'true');
      }, 10000);

      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
        window.removeEventListener('resize', checkMobile);
      };
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Don't save to localStorage so it shows every time
    // localStorage.setItem('hasSeenLanguageNotification', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="language-notification">
      <div className="notification-content">
        <span className="notification-icon">🌐</span>
        <div className="notification-text">
          <p>
            {isMobile 
              ? (isSpanish 
                  ? "Open the menu ☰ and use the language toggle to switch to English!" 
                  : "¡Abre el menú ☰ y usa el botón de idioma para cambiar a español!"
                )
              : (isSpanish 
                  ? "You can change the language using the toggle button at the top!" 
                  : "¡Puedes cambiar el idioma usando el botón en la parte superior!"
                )
            }
          </p>
        </div>
        <button className="notification-close" onClick={handleClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default LanguageNotification;
