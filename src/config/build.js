module.exports.paths = {
    main: {
        root: 'src/main',
        get scripts() { return `${this.root}/**/*.ts`; },
        get tsconfig() { return `${this.root}/tsconfig.json`; }
    },
    ui: {
        root: 'src/ui',
        get scripts() { return `${this.root}/scripts/**/*.ts`; },
        get scriptsEntrypoint() { return `${this.root}/scripts/main.ts`; },
        get tsconfig() { return `${this.root}/tsconfig.json`; },
        get styles() { return `${this.root}/styles/**/*.scss`; },
        get stylesEntrypoint() { return `${this.root}/styles/main.scss`; },
        get fonts() { return `${this.root}/fonts/**/*`; },
        get images() { return `${this.root}/images/**/*`; },
        get pages() { return `${this.root}/**/*.html`; }
    }
};

module.exports.buildPaths = {
    root: 'built',
    main: {
        root: 'built/main',
        get scripts() { return this.root; }
    },
    ui: {
        root: 'built/ui',
        get pages () { return this.root; },
        get scripts() { return `${this.root}/js`; },
        get styles() { return `${this.root}/css`; },
        get fonts() { return `${this.root}/fonts`; },
        get images() { return `${this.root}/images`; },
    }
};
