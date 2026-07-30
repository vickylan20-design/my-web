from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf"
PUBLIC = ROOT / "public" / "resume"
OUTPUT.mkdir(parents=True, exist_ok=True)
PUBLIC.mkdir(parents=True, exist_ok=True)

pdfmetrics.registerFont(TTFont("CJK", "/System/Library/Fonts/Supplemental/Arial Unicode.ttf"))
BLUE = colors.HexColor("#165DFB")
INK = colors.HexColor("#111111")
MUTED = colors.HexColor("#666666")
LINE = colors.HexColor("#D5D4CF")

profiles = {
    "lan-hsiao-chi-resume.pdf": (
        "產品探索、使用者研究與設計落地",
        "具備 0→1 行動產品、複雜內容平台及 Design System 經驗，能獨立推進使用者研究、前期產品規劃與跨平台設計；並運用 AI 建立高效率的設計工作流，延伸至前端實作與品質驗證。",
        [
            ("從 0→1 完成 2 款 App 產品設計", "涵蓋需求探索、使用者流程、介面設計至開發交付。"),
            ("主導大型內容管理平台資訊架構重構", "梳理複雜內容與操作流程，提升系統的可理解性及使用效率。"),
            ("建置多平台 Design System", "建立 Design Token、共用元件與使用規範，提高設計一致性及交付效率。"),
            ("獨立規劃並執行多輪使用者研究", "將訪談洞察轉化為產品需求、功能優先級及前期產品方向。"),
            ("推動團隊 AI 設計能力", "擔任 Lovart 內部講師，工作坊累計 50+ 人參與。"),
        ],
    ),
    "lan-hsiao-chi-product-strategy.pdf": (
        "從洞察定義問題，推動產品方向與落地",
        "擅長從使用者洞察、行為數據與商業需求定義產品問題，將研究結論轉化為功能優先級、產品 Roadmap 與可執行方案。",
        [
            ("獨立推進多輪使用者研究", "將訪談與行為洞察轉化為產品需求及功能優先級。"),
            ("優化社交 App 群聊體驗", "整體使用率提升 5%，房間開啟率提升 11%。"),
            ("探索 AI 健康服務場景", "以數據分析、訪談及 Prototype 測試推進產品體驗，平台參與率最高達 88%。"),
            ("整合 5 大品牌會員需求", "建立一致登入體驗及長期會員產品 Roadmap。"),
            ("完成 2 款 0→1 App", "從需求探索、產品流程到開發交付完整推進。"),
        ],
    ),
    "lan-hsiao-chi-product-systems.pdf": (
        "複雜系統設計與可持續的產品框架",
        "專注複雜內容平台、資訊架構與 Design System，能梳理跨角色工作流程，建立一致、可理解且可擴充的產品體驗。",
        [
            ("主導大型新聞 CMS 重構", "梳理近 20 年內容工作流程與複雜操作情境。"),
            ("重建資訊架構與操作流程", "提升後台系統的可理解性、效率與擴充彈性。"),
            ("建置多平台 Design System", "建立 Design Token、共用元件與使用規範。"),
            ("設計跨品牌會員系統", "整合 5 大品牌零散需求，建立一致登入體驗。"),
            ("具備跨平台交付經驗", "涵蓋 RWD Web、iOS、Android 及前後台產品。"),
        ],
    ),
    "lan-hsiao-chi-ai-startup.pdf": (
        "把 AI 應用轉化為可驗證的產品體驗",
        "具備新創 0→1、AI 服務探索與快速落地能力，能從需求定義、原型測試到前端實作，建立可持續迭代的 AI 產品流程。",
        [
            ("完成 2 款 0→1 App", "在新創環境獨立推進探索、設計與開發交付。"),
            ("推進 AI 健康服務體驗", "以研究與 Prototype 驗證新場景，平台參與率最高達 88%。"),
            ("建立 AI 設計工作流", "串接需求轉譯、視覺探索、Figma MCP 與前端實作。"),
            ("推動團隊 AI 能力", "擔任 Lovart 講師，工作坊累計 50+ 人參與。"),
            ("連續參與 2 屆 AI Hackathon", "其中作品獲選佳作。"),
        ],
    ),
}

workflow = [
    ("需求轉譯", "建立 PRD／需求文件轉譯 Skill，加速需求理解與前期分析。"),
    ("視覺探索", "以 AI 快速產生多方向提案，協助 Stakeholders 提前對焦。"),
    ("設計系統", "串接 AI 與 Figma MCP，建立 Token、元件與設計規範。"),
    ("前端驗證", "運用 Codex 延伸前端原型與實作，提高設計落地一致性。"),
]

def para(text, size=9, leading=14, color=INK, bold=False, space_after=0):
    return Paragraph(text, ParagraphStyle("p", fontName="CJK", fontSize=size, leading=leading, textColor=color, spaceAfter=space_after, alignment=TA_LEFT))

def section_title(number, title):
    table = Table([[para(number, 7, 9, BLUE), para(title, 12, 15, INK)]], colWidths=[12*mm, 48*mm])
    table.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP"), ("LEFTPADDING", (0,0), (-1,-1), 0), ("RIGHTPADDING", (0,0), (-1,-1), 0), ("TOPPADDING", (0,0), (-1,-1), 0), ("BOTTOMPADDING", (0,0), (-1,-1), 0)]))
    return table

def bullet_rows(items):
    rows = []
    for idx, (lead, detail) in enumerate(items, 1):
        rows.append([para(f"{idx:02}", 7, 11, MUTED), para(f"<b>{lead}</b><br/>{detail}", 8.3, 12.5)])
    table = Table(rows, colWidths=[11*mm, 109*mm], repeatRows=0)
    table.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP"), ("LEFTPADDING", (0,0), (-1,-1), 0), ("RIGHTPADDING", (0,0), (-1,-1), 0), ("TOPPADDING", (0,0), (-1,-1), 0), ("BOTTOMPADDING", (0,0), (-1,-1), 4*mm)]))
    return table

def rule():
    t = Table([[""]], colWidths=[174*mm], rowHeights=[0.3])
    t.setStyle(TableStyle([("BACKGROUND", (0,0), (-1,-1), LINE), ("LEFTPADDING", (0,0), (-1,-1), 0), ("RIGHTPADDING", (0,0), (-1,-1), 0)]))
    return t

def build(filename, title, profile, impacts):
    output = OUTPUT / filename
    doc = SimpleDocTemplate(str(output), pagesize=A4, leftMargin=18*mm, rightMargin=18*mm, topMargin=16*mm, bottomMargin=14*mm, title=f"Lan Hsiao-Chi - {title}", author="Lan Hsiao-Chi")
    story = [
        para("LAN HSIAO-CHI  ·  PRODUCT DESIGNER", 7, 9, BLUE), Spacer(1, 8*mm),
        para("Lan Hsiao-Chi", 30, 32), Spacer(1, 3*mm), para(title, 16, 20, BLUE), Spacer(1, 5*mm),
        para(profile, 9.5, 15), Spacer(1, 4*mm),
        para("vickylan20@gmail.com   ·   Portfolio", 7.5, 10, MUTED), Spacer(1, 8*mm), rule(), Spacer(1, 6*mm),
        Table([[section_title("01", "Selected Impact"), bullet_rows(impacts)]], colWidths=[54*mm, 120*mm], style=[("VALIGN", (0,0), (-1,-1), "TOP"), ("LEFTPADDING", (0,0), (-1,-1), 0), ("RIGHTPADDING", (0,0), (-1,-1), 0)]),
        Spacer(1, 2*mm), rule(), Spacer(1, 6*mm),
        Table([[section_title("02", "Experience"), para("<b>TVBS</b>  ·  Product Designer  ·  2024—Now<br/>新聞 CMS、會員系統、健康內容平台與 AI Chatbot<br/><br/><b>Moment Pet Wellness</b>  ·  Product Designer  ·  2023<br/>寵物健康 App Redesign 與使用者研究<br/><br/><b>Zoomo Space</b>  ·  Product Designer  ·  2020—2022<br/>Moodii、ShapeX 兩款 0→1 App", 8.3, 13)]], colWidths=[54*mm, 120*mm], style=[("VALIGN", (0,0), (-1,-1), "TOP"), ("LEFTPADDING", (0,0), (-1,-1), 0), ("RIGHTPADDING", (0,0), (-1,-1), 0)]),
        Spacer(1, 6*mm), rule(), Spacer(1, 6*mm),
        Table([[section_title("03", "AI Workflow"), bullet_rows(workflow)]], colWidths=[54*mm, 120*mm], style=[("VALIGN", (0,0), (-1,-1), "TOP"), ("LEFTPADDING", (0,0), (-1,-1), 0), ("RIGHTPADDING", (0,0), (-1,-1), 0)]),
        Spacer(1, 1*mm), para("Product Discovery · User Research · Information Architecture · Design System · RWD Web · iOS · Android · Figma · Figma MCP · Codex · Lovart", 7.2, 11, MUTED)
    ]
    doc.build(story)
    (PUBLIC / filename).write_bytes(output.read_bytes())

for name, data in profiles.items():
    build(name, *data)
