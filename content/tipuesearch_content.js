var tipuesearch = {"pages": [{'title': 'About', 'text': '40623153個人倉儲 \n 40623153個人網站 \n 流程圖: \n \n 此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '期中內容', 'text': '', 'tags': '', 'url': '期中內容.html'}, {'title': 'Dart', 'text': 'Hello.dart \n gists \n Dartpad \n void main() {\n print("Hello你在看我嗎?");\n} \n \n Hello迴圈 \n gists \n Dartpad \n void main() {\n  for (var i = 0; i < 8; i++) {\n    print(\'Hello你要看幾次 $i\');\n  }\n} \n \n \n 亂數分組 \n gists \n Dartpad \n import \'dart:html\';\n\nvoid main() {\n  // 每一組 10 人\n  int num = 10;\n  // 組序由 1 開始\n  int gth = 1;\n  // 迴圈序號變數\n  int i;\n  // 每組學員暫存數列\n  var gp_list = [];\n  // 全班分組數列\n  var cp2019 = [];\n\n  HttpRequest.getString(\n          \'https://mde.tw/cp2019/downloads/2019fall_cp_1a_list.txt\')\n      .then((String resp) {\n    // 利用 trim() 去除字串最後的跳行符號, 之後再利用 split() 根據 \\n 轉為數列\n    var stud_list = resp.trim().split("\\n");\n    // 數列利用 shuffle() 方法以隨機方法弄亂順序\n    stud_list.shuffle();\n    // 逐一讀取已經弄亂的學生學號數列, 利用模數運算每幾人分成一組\n    for (i = 0; i < stud_list.length; i++) {\n      // 0, 1~(num-1), num\n      if (i % num == 0) {\n        gp_list = [];\n        // 列印區隔符號\n        print(\'=\' * 20);\n        print("group $gth :");\n        print(stud_list[i]);\n        // 在各分組數列中加入將對應的學員學號\n        gp_list.add(stud_list[i]);\n        gth = gth + 1;\n      } else {\n        print(stud_list[i]);\n        // 在各分組數列中加入將對應的學員學號\n        gp_list.add(stud_list[i]);\n      }\n      if (i % num == 0) {\n        // 逐步將各組暫存的分組數列加入全班分組數列中\n        cp2019.add(gp_list);\n      }\n    }\n    // 列出全班分組數列\n    print(cp2019);\n  });\n}\n \n \n 函數dart \n gists \n Dartpad \n int i;\nint sum;\n \nmain() {\n  sum = 0;\n  for(i=1;i <=10 ;i++){\n    sum += i;\n    print("$sum");\n  }\n print("sum = $sum");\n}\n \nfun1(){\n} \n \n', 'tags': '', 'url': 'Dart.html'}, {'title': 'Dart.button', 'text': '純 Dart 程式 \n Hello   For Loop   Sum   Runge-Kutta   RK ex1   Mass Spring Damping \n 溫度轉換 \n 數列、重複迴圈 \n for c-f \n 重量單位轉換 \n Html 程式 \n ROC Flag   Grid   X-Y Plot   Slithery \n temperature-1   weight \n Flutter 程式 \n Flutter1   Flutter2   Flutter3 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n \n \n \n  for site wrap  \n \n  <script src="../cmsimde/static/chimper/js/jquery-3.3.1.min.js"></script>  \n \n \n \n \n \n \n \n \n \n \n \n            <script src="../cmsimde/static/chimper/js/typed.js"></script>\n                    <script>\n                    var typed = new Typed(\'.typed-words\', {\n                    strings: ["Web Apps"," WordPress"," Mobile Apps"],\n                    typeSpeed: 80,\n                    backSpeed: 80,\n                    backDelay: 4000,\n                    startDelay: 1000,\n                    loop: true,\n                    showCursor: true\n                    });\n                    </script>\n             \n \n \n', 'tags': '', 'url': 'Dart.button.html'}, {'title': 'Class document.', 'text': '參考教學網站連結 \n 1.進入 mde.tw ，點選課程\xa0 2019 Fall 計算機程式 \xa0 \n 下載\xa0 dartpad_based.7z \xa0 (可攜程式)後進行解壓縮 \n \n 2.打開 Github 後 ，進入自己創建的\xa0 倉儲(CP2019) ， Clone 自己的倉儲檔案至到個人電腦or隨身碟內 \n \n \n 3.於Y:\\tmp\\cp2019(名稱自訂)中，輸入以下指令 \n *git submodule\xa0 add\xa0https://github.com/mdecourse/cmsimde\xa0 .git cmsimde \n 等待安裝下載結束後，打開至(路徑)Y:\\tmp\\cp2019\\cmsimde\\up_dir，並將內容檔案文件全選複製貼上到Y:\\tmp\\cp2019 (名稱自訂) \n \n', 'tags': '', 'url': 'Class document..html'}, {'title': '10.17', 'text': '\n 參考網站 \n 1.使用 dartpad確認程式碼是否可運作 \n 2.複製程式碼>前往 github >打開 github-gist \n \n 3.建立gist>複製貼上程式碼>程式檔名後面要加上.dart \n \n 4.複製建立好的網址後碼>貼上dartpad查看是否能顯示出來 \n dartpad的用法 \n http://mde.tw/dartpad/?id=edb6d8eea4f7e15afba397fe3963f665 / ( ?id=+複製的後碼)(紅框部分) \n \n 5.嵌入入近端網站，利用 <> 功能嵌入dartpad程式碼 \n 嵌入dartpad用法 \n 利用<>內字串，會產生出dartpad介面 \n \n \n 6.嵌入 近端網站，利用 </> 功能嵌入dartpad 程式 \n \n \n', 'tags': '', 'url': '10.17.html'}, {'title': '12.05', 'text': '遇到的問題: \n 使用自己的電腦與此發生一樣的情形，後來透過此處理方法後就解決了 \n \n', 'tags': '', 'url': '12.05.html'}, {'title': '12.12', 'text': '在學校電腦發現有病毒的存在，插入隨身碟後會讓自己的隨身碟變成 .ink 檔 \n 原先資料夾內的資料會消失變成捷徑檔 \n 若不小心點擊該捷徑檔，雖會看到原本的檔案資料，但此時已感染病毒 \n 以下是上網找尋到解決辦法 \n \n \n \n', 'tags': '', 'url': '12.12.html'}, {'title': '12.19', 'text': 'Dia程式功能介紹 \n 1. \n 2. \n 3. \n 4. \n \n', 'tags': '', 'url': '12.19.html'}, {'title': '期末內容', 'text': '', 'tags': '', 'url': '期末內容.html'}, {'title': 'Dia操作影片', 'text': '\n 相關介紹於class document/12.19 \n', 'tags': '', 'url': 'Dia操作影片.html'}, {'title': '分組合併倉儲', 'text': '\n \n \n \n \n \n \n 操作影片 \n', 'tags': '', 'url': '分組合併倉儲.html'}, {'title': 'SSH操作', 'text': '\n', 'tags': '', 'url': 'SSH操作.html'}, {'title': 'W16 查驗考試', 'text': '影片 \n \n', 'tags': '', 'url': 'W16 查驗考試.html'}, {'title': 'W17考試', 'text': '純 Dart 程式 \n \n \n \n  取 Dart 程式的按鈕  \n Html 程式 \n  內建放入的 Dart 原始碼  \n weight \n \n \n \n  for site wrap  \n \n  <script src="./../cmsimde/static/jquery.js"></script>  \n \n  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>  \n \n \n \n \n \n \n \n \n \n  Link back to Colorlib can\'t be removed. Template is licensed under CC BY 3.0.  \n \n \n \n \n  for footer  \n  for site wrap  \n \n  <script src="../cmsimde/static/chimper/js/jquery-3.3.1.min.js"></script>  \n \n \n \n \n \n \n \n \n \n \n \n            <script src="../cmsimde/static/chimper/js/typed.js"></script>\n                    <script>\n                    var typed = new Typed(\'.typed-words\', {\n                    strings: ["Web Apps"," WordPress"," Mobile Apps"],\n                    typeSpeed: 80,\n                    backSpeed: 80,\n                    backDelay: 4000,\n                    startDelay: 1000,\n                    loop: true,\n                    showCursor: true\n                    });\n                    </script>\n             \n', 'tags': '', 'url': 'W17考試.html'}]};