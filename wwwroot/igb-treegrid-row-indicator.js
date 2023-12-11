// この JavaScript ファイルは、wwwroot/index.html にて script タグで読み込まれます。

(() => {
    // アイコン表示要素を組み立てて返す関数です。
    // 引数に、アイコン名を取ります。
    const createIconElement = (iconName) => {
        const div = document.createElement("igx-icon");
        div.classList.add("material-icons");
        div.classList.add("igx-icon");
        div.textContent = iconName;
        div.style.pointerEvents = "none";
        return div;
    }

    // 折り畳まれている行に表示するアイコン要素を返す関数を、
    // "rowCollapsedIndicator" という名前で Ignite UI for Blazor に登録します。
    igRegisterScript("rowCollapsedIndicator", () => createIconElement("add_circle"), false);

    // 展開されている行に表示するアイコン要素を返す関数を、
    // "rowExpandedIndicator" という名前で Ignite UI for Blazor に登録します。
    igRegisterScript("rowExpandedIndicator", () => createIconElement("do_not_disturb_on"), false);
})();
