function onAssigningCategoryStyleScript(o, e) {
    // 開始インデックスと終了インデックスを取得
    var startIndex = e.startIndex;
    var endIndex = e.endIndex;
    // 指定された範囲のアイテムを取得
    var items = e.getItems(startIndex, endIndex);
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        // Salesが60000未満の場合は赤いストロークとピンクの塗りつぶしを適用
        if (item.Sales < 60000) {
            e.stroke = "red";
            e.strokeThickness = "1";
            e.fill = "pink";
        }
        // Salesが60000以上80000未満の場合はオレンジのストロークとイエローの塗りつぶしを適用
        else if (item.Sales < 80000) {
            e.stroke = "orange";
            e.strokeThickness = "1";
            e.fill = "yellow";
        }
        // Salesが80000以上の場合は緑のストロークとライトグリーンの塗りつぶしを適用
        else if (item.Sales >= 80000) {
            e.stroke = "green";
            e.strokeThickness = "1";
            e.fill = "lightgreen";
        }
    }
}
igRegisterScript("onAssigningCategoryStyleScript", onAssigningCategoryStyleScript, false);
