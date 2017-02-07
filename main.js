// This was a weekend project. Nevermind the code quality.
// TODO: Switch to Vue.js

var $input_i3 = $('#i3-input');
var $input_i3status = $('#i3status-input');
var $input_workspaces = $('#i3workspaces-input');
var $input_dmenu = $('#dmenu-input');

var $output_dmenu = $('#dmenu');
var $output_windows = $('#windows');
var $output_i3status = $('#i3status');

var $code_i3 = $('#output-i3');
var $code_i3status = $('#output-i3status');

var colors;

var $input = {
  i3: {
    background: $input_i3.find('.window .background'),
    titles: {
      focused: {
        border: $input_i3.find('.focused .border'),
        background: $input_i3.find('.focused .background'),
        text: $input_i3.find('.focused .text'),
        indicator: $input_i3.find('.focused .indicator'),
        child: $input_i3.find('.focused .child')
      },
      inactive: {
        border: $input_i3.find('.inactive .border'),
        background: $input_i3.find('.inactive .background'),
        text: $input_i3.find('.inactive .text'),
        indicator: $input_i3.find('.inactive .indicator'),
        child: $input_i3.find('.inactive .child')
      },
      unfocused: {
        border: $input_i3.find('.unfocused .border'),
        background: $input_i3.find('.unfocused .background'),
        text: $input_i3.find('.unfocused .text'),
        indicator: $input_i3.find('.unfocused .indicator'),
        child: $input_i3.find('.unfocused .child')
      },
      urgent: {
        border: $input_i3.find('.urgent .border'),
        background: $input_i3.find('.urgent .background'),
        text: $input_i3.find('.urgent .text'),
        indicator: $input_i3.find('.urgent .indicator'),
        child: $input_i3.find('.urgent .child')
      },
      placeholder: {
        border: $input_i3.find('.placeholder .border'),
        background: $input_i3.find('.placeholder .background'),
        text: $input_i3.find('.placeholder .text'),
        indicator: $input_i3.find('.placeholder .indicator'),
        child: $input_i3.find('.placeholder .child')
      },
    }
  },
  i3status: {
    background: $input_i3status.find('.basic .background'),
    statusline: $input_i3status.find('.basic .text'),
    separator: $input_i3status.find('.basic .separator'),
    good: $input_i3status.find('.good .text'),
    degraded: $input_i3status.find('.degraded .text'),
    bad: $input_i3status.find('.bad .text'),
    workspace: {
      focused: {
        border: $input_workspaces.find('.focused .border'),
        background: $input_workspaces.find('.focused .background'),
        text: $input_workspaces.find('.focused .text')
      },
      active: {
        border: $input_workspaces.find('.active .border'),
        background: $input_workspaces.find('.active .background'),
        text: $input_workspaces.find('.active .text')
      },
      inactive: {
        border: $input_workspaces.find('.inactive .border'),
        background: $input_workspaces.find('.inactive .background'),
        text: $input_workspaces.find('.inactive .text')
      },
      urgent: {
        border: $input_workspaces.find('.urgent .border'),
        background: $input_workspaces.find('.urgent .background'),
        text: $input_workspaces.find('.urgent .text')
      },
      binding: {
        border: $input_workspaces.find('.binding .border'),
        background: $input_workspaces.find('.binding .background'),
        text: $input_workspaces.find('.binding .text')
      },
    }
  },
  dmenu: {
    normal: {
      background: $input_dmenu.find('.normal .background'),
      foreground: $input_dmenu.find('.normal .foreground')
    },
    selected: {
      background: $input_dmenu.find('.selected .background'),
      foreground: $input_dmenu.find('.selected .foreground')
    }
  }
};

function render() {
colors = {
  i3: {
    background: $input.i3.background.val(),
    titles: {
      focused: {
        border: $input.i3.titles.focused.border.val(),
        background: $input.i3.titles.focused.background.val(),
        text: $input.i3.titles.focused.text.val(),
        indicator: $input.i3.titles.focused.indicator.val(),
        child: $input.i3.titles.focused.child.val()
      },
      inactive: {
        border: $input.i3.titles.inactive.border.val(),
        background: $input.i3.titles.inactive.background.val(),
        text: $input.i3.titles.inactive.text.val(),
        indicator: $input.i3.titles.inactive.indicator.val(),
        child: $input.i3.titles.inactive.child.val()
      },
      unfocused: {
        border: $input.i3.titles.unfocused.border.val(),
        background: $input.i3.titles.unfocused.background.val(),
        text: $input.i3.titles.unfocused.text.val(),
        indicator: $input.i3.titles.unfocused.indicator.val(),
        child: $input.i3.titles.unfocused.child.val()
      },
      urgent: {
        border: $input.i3.titles.urgent.border.val(),
        background: $input.i3.titles.urgent.background.val(),
        text: $input.i3.titles.urgent.text.val(),
        indicator: $input.i3.titles.urgent.indicator.val(),
        child: $input.i3.titles.urgent.child.val()
      },
      placeholder: {
        border: $input.i3.titles.placeholder.border.val(),
        background: $input.i3.titles.placeholder.background.val(),
        text: $input.i3.titles.placeholder.text.val(),
        indicator: $input.i3.titles.placeholder.indicator.val(),
        child: $input.i3.titles.placeholder.child.val()
      },
    }
  },
  i3status: {
    background: $input.i3status.background.val(),
    statusline: $input.i3status.statusline.val(),
    separator: $input.i3status.separator.val(),
    good: $input.i3status.good.val(),
    degraded: $input.i3status.degraded.val(),
    bad: $input.i3status.bad.val(),
    workspace: {
      focused: {
        border: $input.i3status.workspace.focused.border.val(),
        background: $input.i3status.workspace.focused.background.val(),
        text: $input.i3status.workspace.focused.text.val()
      },
      active: {
        border: $input.i3status.workspace.active.border.val(),
        background: $input.i3status.workspace.active.background.val(),
        text: $input.i3status.workspace.active.text.val()
      },
      inactive: {
        border: $input.i3status.workspace.inactive.border.val(),
        background: $input.i3status.workspace.inactive.background.val(),
        text: $input.i3status.workspace.inactive.text.val()
      },
      urgent: {
        border: $input.i3status.workspace.urgent.border.val(),
        background: $input.i3status.workspace.urgent.background.val(),
        text: $input.i3status.workspace.urgent.text.val()
      },
      binding: {
        border: $input.i3status.workspace.binding.border.val(),
        background: $input.i3status.workspace.binding.background.val(),
        text: $input.i3status.workspace.binding.text.val()
      },
    }
  },
  dmenu: {
    normal: {
      background: $input.dmenu.normal.background.val(),
      foreground: $input.dmenu.normal.foreground.val()
    },
    selected: {
      background: $input.dmenu.selected.background.val(),
      foreground: $input.dmenu.selected.foreground.val()
    }
  }
};

var i3status = `general {
  output_format = "i3bar"
  colors = true
  color_good = "#${colors.i3status.good}"
  color_degraded = "#${colors.i3status.degraded}"
  color_bad = "##${colors.i3status.bad}"
}`;

var i3 = `# class                 border  bground text    indicator child_border
client.focused          #${colors.i3.titles.focused.border} #${colors.i3.titles.focused.background} #${colors.i3.titles.focused.text} #${colors.i3.titles.focused.indicator}   #${colors.i3.titles.focused.child}
client.focused_inactive #${colors.i3.titles.inactive.border} #${colors.i3.titles.inactive.background} #${colors.i3.titles.inactive.text} #${colors.i3.titles.inactive.indicator}   #${colors.i3.titles.inactive.child}
client.unfocused        #${colors.i3.titles.unfocused.border} #${colors.i3.titles.unfocused.background} #${colors.i3.titles.unfocused.text} #${colors.i3.titles.unfocused.indicator}   #${colors.i3.titles.unfocused.child}
client.urgent           #${colors.i3.titles.urgent.border} #${colors.i3.titles.urgent.background} #${colors.i3.titles.urgent.text} #${colors.i3.titles.urgent.indicator}   #${colors.i3.titles.urgent.child}
client.placeholder      #${colors.i3.titles.placeholder.border} #${colors.i3.titles.placeholder.background} #${colors.i3.titles.placeholder.text} #${colors.i3.titles.placeholder.indicator}   #${colors.i3.titles.placeholder.child}

client.background       #${colors.i3.background}

bar {
  colors {
    background #${colors.i3status.background}
    statusline #${colors.i3status.statusline}
    separator  #${colors.i3status.separator}

    focused_workspace  #${colors.i3status.workspace.focused.border} #${colors.i3status.workspace.focused.background} #${colors.i3status.workspace.focused.text}
    active_workspace   #${colors.i3status.workspace.active.border} #${colors.i3status.workspace.active.background} #${colors.i3status.workspace.active.text}
    inactive_workspace #${colors.i3status.workspace.inactive.border} #${colors.i3status.workspace.inactive.background} #${colors.i3status.workspace.inactive.text}
    urgent_workspace   #${colors.i3status.workspace.urgent.border} #${colors.i3status.workspace.urgent.background} #${colors.i3status.workspace.urgent.text}
    binding_mode       #${colors.i3status.workspace.binding.border} #${colors.i3status.workspace.binding.background} #${colors.i3status.workspace.binding.text}
  }
}

bindsym $mod+d exec "dmenu_run -nf '#${colors.dmenu.normal.foreground}' -nb '#${colors.dmenu.normal.background}' -sb '#00557${colors.dmenu.selected.background}' -sf '#${colors.dmenu.selected.foreground}' -fn 'monospace-10' -p 'dmenu prompt &gt;'"`;

$code_i3.text(i3);
$code_i3status.text(i3status);

renderDmenu();
}

function renderDmenu() {
  var normal = $output_dmenu.find('.item');
  var selected = $output_dmenu.find('.prompt, .item.selected');

  var normal_css = {
    color: $input.dmenu.normal.foreground.val(),
    'background-color': $input.dmenu.normal.background.val(),
  };

  normal.css(normal_css);
  $output_dmenu.css(normal_css);

  selected.css({
    color: $input.dmenu.selected.foreground.val(),
    'background-color': $input.dmenu.selected.background.val(),
  });
}

$(function() {
  render();
  $('#colors input').change(render);
});
