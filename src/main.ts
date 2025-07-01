console.log(`
╔════════════════════════════════════════════════════════════════╗
║ [remi@portfolio ~]$ ./hello                                    ║
║                                                                ║
║ Hi! Welcome to my website! Please enjoy your stay :)           ║
║                                                                ║
║ Available commands:                                            ║
║   about()      - Learn more about me                           ║
║   whatido()    - See what I do                                 ║
║   contactme()  - Get in touch                                  ║
╚════════════════════════════════════════════════════════════════╝
`)

// Make the function accessible from the browser console
;(window as any).about = about

export function about() {
  console.log(`
╔════════════════════════════════════════════════════════════════╗
║ [remi@portfolio ~]$ ./about                                    ║
║                                                                ║
║ I make things on the web, and I like to make them look good    ║
║ and enticing.                                                  ║
╚════════════════════════════════════════════════════════════════╝
`)
}
