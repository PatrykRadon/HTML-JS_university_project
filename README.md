# HTML-JS_university_project
A simple website created to practise using HTML5 CSS3.0 JavaScript and WebWorker technology.

Dokumentacja projektu nr.1 z Technik Internetowych



Temat

Celem projektu jest zaprezentowanie wybranego zagadnienia z matematyki, fizyki czy informatyki.

Tematem mojego projektu jest Wprowadzenie do Uczenia Głębokiego.



Założenia

Temat ten należało zaprezentować z wykorzystaniem graficznych animacji zrealizowanych z wykorzystaniem języka JavaScript, CSS 3.0, Język HTML5.

Strona przechodzi poprawną walidacje na stronie W3C zgodnie z standardem HTML5 i CSS.



Realizacja

W projekcie wykorzystano elementy semantyczne języka HTML5

Grafika w projekcie opracowano z wykorzystaniem grafiki wektorowej SVG

JavaScript w projekcie wykorzystany został do modyfikacji dokumentu HTML5 z wykorzystaniem funkcji getElementByID i innerHTML oraz do obsługi zdarzeń funkcje onclick(). Dodatkowo użyte zostały funkcjonalności WebWorkerów. Dokładne działanie zostało opisane niżej.





Dokumenacja funkcji

1) JavaScript

curr_con = 'ann_wrapper'; - zmienna current_content przechowuje nazwę aktualnie wyświetlonej części strony

w - zmienna przechowująca aktualny WebWorker

toggleSidebar() - funkcja po uruchomieniu pozwala paskowi menu przejść w stan dostępu 

showContent(element) - funkcja przyzjmuje nazwe elementu po czym pozwala wyświetlić mu się na ekranie. Uruchamia na wcześniej aktualnym elemencie funkcję hideCurrentContent()

hideCurrentContent() - funkcja ukrywa wszystkie bierzące zawartości wyświetlanych sekcji

startWorker() - funkcja uruchamia WebWorker w zmeinnej 'w' z pliku webworker.js aż do zatrzymania
*! jeśli przeglądarka nie obsługuje WebWrokerów użytkownik zostaje o tym powiadomiony komunikatem.

stopWorker() - funkcja zatzymuje WebWorker ze zmiennej 'w', oraz ustawia na niej stosowną flagę o stanie spoczynku


2) WebWorkers
i - zmienna lokalna przechowująca liczbę
timedCount() - funkcja uruchamia się co określony czas, zwracając za pomocą postMessage kolejny z obrazków znajdujących się w pliku /img/cnn/maxpool
