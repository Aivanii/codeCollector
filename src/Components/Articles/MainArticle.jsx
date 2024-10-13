
const htmlString = `<link rel="stylesheet" href="../../src/articlesStyles.css">

<div>
    <p class="Text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum voluptas asperiores quasi veritatis suscipit
        itaque esse vel, facere repellendus ab consequatur neque corrupti ipsum quis quidem voluptatibus commodi,
        maiores amet!
    </p>
    <h2 class="ThemeTitle">new theme</h2>
    <p class="Text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum voluptas asperiores quasi veritatis suscipit
        itaque esse vel, facere repellendus ab consequatur neque corrupti ipsum quis quidem voluptatibus commodi,
        maiores amet!
    </p>
    <p class="Text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum voluptas asperiores quasi veritatis suscipit
        itaque esse vel, facere repellendus ab consequatur neque corrupti ipsum quis quidem voluptatibus commodi,
        maiores amet!
        <a class="Link">here is link</a>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat
        <code class="CodeText">text</code>
        delectus odit dolore quo, possimus eius voluptates voluptatum porro distinctio tempore quaerat incidunt modi
        autem ipsam cumque? Maxime, sit excepturi.
    </p>
</div>
<div>
    <p class="Text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum voluptas asperiores quasi veritatis suscipit
        itaque esse vel, facere repellendus ab consequatur neque corrupti ipsum quis quidem voluptatibus commodi,
        maiores amet!
    </p>
    <h2 class="ThemeTitle">new theme</h2>
    <p class="Text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum voluptas asperiores quasi veritatis suscipit
        itaque esse vel, facere repellendus ab consequatur neque corrupti ipsum quis quidem voluptatibus commodi,
        maiores amet!
    </p>
    <div class="CodeContainer">
        <div class="SpanCodeboxLine">
            <span class="SpanLine">1</span>
            <span class="SpanLine">2</span>
            <span class="SpanLine">3</span>
            <span class="SpanLine">4</span>
            <span class="SpanLine">5</span>
            <span class="SpanLine">6</span>
            <span class="SpanLine">7</span>
            <span class="SpanLine">8</span>
            <span class="SpanLine">9</span>
            <span class="SpanLine">10</span>
            <span class="SpanLine">11</span>
            <span class="SpanLine">12</span>
        </div>
        <pre clsas="CodeboxCode">
                hello
                world
                !
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor repellendus vero modi suscipit, ipsam veniam nisi vitae? Earum saepe asperiores expedita ducimus itaque. Sapiente commodi iure exercitationem eligendi voluptate!
                my
                name
                is
                eter
                arker
                god
                dame
                it
            </pre>
    </div>
    <p class="Text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum voluptas asperiores quasi veritatis suscipit
        itaque esse vel, facere repellendus ab consequatur neque corrupti ipsum quis quidem voluptatibus commodi,
        maiores amet!
        <a class="Link">here is link</a>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat
        <code class="CodeText">text</code>
        delectus odit dolore quo, possimus eius voluptates voluptatum porro distinctio tempore quaerat incidunt modi
        autem ipsam cumque? Maxime, sit excepturi.
    </p>
</div>`;

export default function MainArticle() {
    return (
        <div className="Container" dangerouslySetInnerHTML={{ __html: htmlString }}></div>
    );
}

