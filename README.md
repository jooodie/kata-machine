# TypeScript Algorithms & Data Structures

[![Algorithm Tests](https://github.com/jooodie/kata-machine/actions/workflows/test.yml/badge.svg)](https://github.com/jooodie/kata-machine/actions/workflows/test.yml)

基於 [ThePrimeagen](https://github.com/ThePrimeagen) 的 `kata-machine` 架構，以 **TypeScript** 純手工（From Scratch）實作核心資料結構與經典演算法。

專案整合 **GitHub Actions CI/CD** 自動化測試流程，針對各演算法實作進行邊界條件、指針操作與時間複雜度之單元測試驗證。

---

## 🛠 技術棧與工具

- **語言 (Language)**: TypeScript
- **測試框架 (Testing)**: Jest
- **持續整合 (CI/CD)**: GitHub Actions

---

## 📌 涵蓋核心主題 (Topics Covered)

- **搜尋與排序 (Searching & Sorting)**: Linear Search, Binary Search, Bubble Sort, Quick Sort, Two Crystal Balls Problem ($O(\sqrt{n})$)
- **線性資料結構 (Linear Data Structures)**: Singly / Doubly Linked List, Stack, Queue, Dynamic Array
- **樹與圖論 (Trees & Graphs)**: Binary Tree Traversals (Pre/In/Post Order), BFS, DFS, BST Operations, MinHeap, Dijkstra's Shortest Path
- **進階演算法與系統設計 (Advanced & Design)**: LRU Cache, Maze Solver (Backtracking / Recursion), Trie

---

## 🧪 本地測試驗證

本專案使用 Jest 進行嚴格的單元測試，可在本地端驗證演算法實作：

```bash
# 安裝相依套件
npm install # 或 yarn install

# 執行演算法單元測試
npm test