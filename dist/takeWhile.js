export function* lazyTakeWhileGen(iterable, predicate) {
    for (const item of iterable) {
        if (!predicate(item)) {
            return;
        }
        yield item;
    }
}
//# sourceMappingURL=takeWhile.js.map