enum BREAKPOINTS {
    xs = 0,
    sm = 600,
    md = 900,
    lg = 1200,
    xl = 1536,
}

export const breakpoints = {
    xs: BREAKPOINTS.xs,
    sm: BREAKPOINTS.sm,
    md: BREAKPOINTS.md,
    lg: BREAKPOINTS.lg,
    xl: BREAKPOINTS.xl
}

export const devices = {
    tablet: `(min-width: ${breakpoints.sm}px)`,
    laptop: `(min-width: ${breakpoints.md}px)`,
    desktop: `(min-width: ${breakpoints.lg}px)`,
    other: `(min-width: ${breakpoints.xl})px`
}