import Link from "next/link"
export default function Private(){
    return<>
   <div>
    <h2>Личный кабинет</h2>
    <ul>
<li>
  <Link href="/personalArea" legacyBehavior>
    <div>
      <img src="/img/Header/Frame 1407.png"></img>
      <a className="button">Профиль</a>
    </div>
  </Link>
</li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
   </div>
   <div>
    <h3>Личная информация</h3>
   </div>
    </>
}
