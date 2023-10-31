// import React, { useState, useEffect } from "react";
// import { Console, Hook, Decode } from "console-feed";
// import { useIsHidden } from "../../../hooks/useIsHidden";
// import styles from "./detail.module.scss";
// function Consoles({ jsText }) {
//   const { hidden, handleClick } = useIsHidden();
//   const [logs, setLogs] = useState([]);
//         Hook(window.console, (logMessage) => {
//           setLogs((prevLogs) => [...prevLogs, Decode(logMessage)]);
//         });
//   useEffect(
//     () => {
//       const autoSave = setTimeout(() => {
//             setLogs([]);
//             try {
//               new Function(jsText)();
//             } catch (error) {
//               console.error(error.message);
//             }
//       }, 2000);
//       return () => clearTimeout(autoSave);
//     }, // eslint-disable-next-line
//     [jsText]
//   );

//   return (
//     <div>
//       <span className={styles.consoleContainer}>
//         <div className={styles.label}>
//           <span className={styles.title}>Console</span>
//         </div>
//         <div className={styles.label}>
//           <button
//             className={styles.action}
//             style={{ background: "#444" }}
//             onClick={handleClick}
//           >
//             <svg
//               className={hidden && styles.rotate}
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               width={24}
//               height={24}
//             >
//               <path fill="none" d="M0 0h24v24H0z" />
//               <path
//                 fill="currentColor"
//                 d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
//               />
//             </svg>
//           </button>
//         </div>
//       </span>
//       <div
//         className={`${styles.consolePreview} ${
//           hidden && styles.consolePreviewShow
//         }`}
//       >
//         <Console logs={logs} variant="dark" />
//       </div>
//     </div>
//   );
// }

// export default Consoles;
