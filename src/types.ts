/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools";
  iconName: string;
  level: number; // percentage, e.g., 95
  color: string;
}

export interface Project {
  id: string;
  title: string;
  category: "Web App" | "UI/UX";
  tags: string[];
  description: string;
  longDescription: string;
  image: string;
  stars: number;
  liveUrl?: string;
  githubUrl?: string;
}

export interface TerminalLog {
  id: string;
  timestamp: string;
  type: "info" | "success" | "warn" | "error" | "intrusion";
  message: string;
}

export interface MessageSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  status: "unread" | "replied";
}
